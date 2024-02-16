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
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => handleBtn()}>Back</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button variant='primary'>Click</Button>
      </div>
    </div>
  )
}

export default Facebook