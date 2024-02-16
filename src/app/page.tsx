'use client'

import AppTable from '@/components/app.table'
import styles1 from '@/styles/app.module.css'
import styles2 from '@/styles/test.module.css'
import Link from 'next/link'
import useSWR from "swr"

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  // Caching Data
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  )

  console.log('data: ', data)

  return (
    <div>
      <div>Data: {data?.length}</div>
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
