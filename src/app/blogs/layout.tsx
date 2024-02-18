import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Blogs Page',
  description: 'Description Blogs Page',
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
