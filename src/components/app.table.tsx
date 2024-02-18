import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import UpdateModal from './update.modal'
import CreateModal from './create.modal'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { mutate } from 'swr'

interface IProps {
  blogs: IBlog[]
}

function AppTable(props: IProps) {
  const [blog, setBlog] = useState<IBlog | null>(null)
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false)
  const [showEditModal, setShowEditModal] = useState<boolean>(false)

  const { blogs } = props

  const handleDeleteBlog = (id: number) => {
    if (confirm(`Delete blog have id is ${id}?`) == true) {
      fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        if (res) {
          toast.success(`Delete blog have id is ${id} success!`)
          // Load lại data table sau khi delete blog
          mutate('http://localhost:8000/blogs')
        }
      })
    }
  }

  return (
    <div>
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
        className='my-3'
      >
        <h3 style={{ marginBottom: 0 }}>Table Blogs</h3>
        <Button onClick={() => setShowCreateModal(true)}>Add New</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link href={`/blogs/${item.id}`} className='btn btn-primary'>View</Link>
                  <Button
                    variant='warning'
                    className='mx-3'
                    onClick={
                      () => {
                        setBlog(item)
                        setShowEditModal(true)
                      }
                    }
                  >
                    Edit
                  </Button>
                  <Button variant='danger' onClick={() => handleDeleteBlog(item.id)}>Delete</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>

      <CreateModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal}/>

      <UpdateModal
        blog={blog}
        setBlog={setBlog}
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
      />
    </div>
  )
}

export default AppTable