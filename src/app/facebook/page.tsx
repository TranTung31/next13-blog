'use client'

import { useRouter } from 'next/navigation'

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
    </div>
  )
}

export default Facebook