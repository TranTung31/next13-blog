'use client'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { mutate } from 'swr'

interface IProps {
  showCreateModal: boolean;
  setShowCreateModal: (value: boolean) => void;
}

function CreateModal(props: IProps) {
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const { showCreateModal, setShowCreateModal } = props

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

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, author, content })
    }).then(res => res.json())
      .then(res => {
        if (res) {
          toast.success('Create a new blog success!')
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
    setShowCreateModal(false)
  }

  return (
    <>
      <Modal
        show={showCreateModal}
        onHide={() => handleClose()}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New A Blog</Modal.Title>
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
          <Button variant="primary" onClick={() => handleSubmit()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateModal