'use client'

import Link from 'next/link'
import styles1 from '@/styles/app.module.css'
import styles2 from '@/styles/test.module.css'
import AppTable from '@/components/app.table'
import { useEffect } from 'react'

export default function Home() {
  const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs")
    const data = await res.json()
    console.log('data: ', data)  
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div>
      <ul>
        <li style={{ marginBottom: '20px' }} className={styles1['facebook']}>
          <Link href='/facebook'><div className={styles2['facebook']}>Facebook</div></Link>
        </li>
        <li style={{ marginBottom: '20px' }}>
          <a href='/youtube'>Youtube</a>
        </li>
        <li style={{ marginBottom: '20px' }}>
          <a href='/tiktok'>Tiktok</a>
        </li>
      </ul>
      <AppTable />
    </div>
  )
}
