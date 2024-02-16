'use client'

import { useRouter } from 'next/navigation'
import Button from 'react-bootstrap/Button'

function Facebook() {
  const router = useRouter()

  const handleBtn = () => {
    router.push('/')
  }

  return (
    <div>
      Facebook Page
      <div style={{ margin: '20px 0' }}>
        <Button variant='primary' onClick={() => handleBtn()}>Back</Button>
      </div>
    </div>
  )
}

export default Facebook