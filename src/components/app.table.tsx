import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import UpdateModal from './update.modal'

interface IProps {
  blogs: IBlog[]
}

function AppTable(props: IProps) {
  const [blog, setBlog] = useState<IBlog | null>(null)
  const [showEditModal, setShowEditModal] = useState<boolean>(false)

  const { blogs } = props

  return (
    <div>
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
                  <Button>View</Button>
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
                  <Button variant='danger'>Delete</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
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