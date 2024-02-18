'use client'

import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify'
import { mutate } from 'swr'

interface IProps {
  blog: IBlog | null;
  setBlog: (value: IBlog | null) => void;
  showEditModal: boolean;
  setShowEditModal: (value: boolean) => void;
}

function UpdateModal(props: IProps) {
  const { blog, setBlog, showEditModal, setShowEditModal } = props

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    if (blog && blog.id) {
      setId(blog.id)
      setTitle(blog.title)
      setAuthor(blog.author)
      setContent(blog.content)
    }
  }, [blog])

  const handleSubmit = () => {
    if (!title) {
      toast.error('The title is required!')
      return
    }

    if (!author) {
      toast.error('The author is required!')
      return
    }

    if (!content) {
      toast.error('The content is required!')
      return
    }

    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, author, content })
    }).then(res => res.json())
      .then(res => {
        if (res) {
          toast.success(`Edit blog have id is ${id} success!`)
          handleClose()
          // Load lại data table sau khi create blog
          mutate('http://localhost:8000/blogs')
        }
      })
  }

  const handleClose = () => {
    setTitle('')
    setAuthor('')
    setContent('')
    setBlog(null)
    setShowEditModal(false)
  }

  return (
    <>
      <Modal
        show={showEditModal}
        onHide={() => handleClose()}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Update A Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateModal