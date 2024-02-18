'use client'

import AppTable from "@/components/app.table"
import useSWR from "swr"

function BlogsPage() {
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

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)}/>
    </div>
  )
}

export default BlogsPage