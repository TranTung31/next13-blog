import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Blogs Detail',
  description: 'Description Blogs Detail',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
