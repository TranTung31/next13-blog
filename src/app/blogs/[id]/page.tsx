function BlogDetail({ params }: { params: { id: string } }) {
  return (
    <div>Blog Detail {params.id}</div>
  )
}

export default BlogDetail