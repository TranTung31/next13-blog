import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul>
        <li style={{ marginBottom: '20px' }}>
          <Link href='/facebook'>Facebook</Link>
        </li>
        <li style={{ marginBottom: '20px' }}>
          <a href='/youtube'>Youtube</a>
        </li>
        <li style={{ marginBottom: '20px' }}>
          <a href='/tiktok'>Tiktok</a>
        </li>
      </ul>
    </div>
  )
}
