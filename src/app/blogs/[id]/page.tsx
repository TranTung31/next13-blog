'use client'

import Link from 'next/link'
import Card from 'react-bootstrap/Card'

function BlogDetail({ params }: { params: { id: string } }) {
  return (
    <div className='my-3'>
      <Link href='/blogs' className='btn btn-primary mb-3'>Go back</Link>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  )
}

export default BlogDetail