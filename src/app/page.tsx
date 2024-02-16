'use client'

import AppTable from '@/components/app.table'
import CreateModal from '@/components/create.modal'
import styles1 from '@/styles/app.module.css'
import styles2 from '@/styles/test.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import useSWR from "swr"

export default function Home() {
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false)

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

  if (!data) return <div>loading...</div>

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
      
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
        className='mb-3'
      >
        <h3>Table Blogs</h3>
        <Button onClick={() => setShowCreateModal(true)}>Add New</Button>
      </div>

      <AppTable blogs={data}/>

      <CreateModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal}/>
    </div>
  )
}
