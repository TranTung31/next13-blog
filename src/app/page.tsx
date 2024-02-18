import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Description Home Page',
}

export default function Home() {
  return (
    <div>
      <h3 className='my-3'>Home Page</h3>
    </div>
  )
}
