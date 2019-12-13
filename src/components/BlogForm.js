import React from 'react'

const BlogForm = ({
  addBlog,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange,
  title,
  author,
  url
}) => {
  return (
    <form onSubmit={addBlog}>
      <h1>Create new blog</h1>
      <label>
      Title:
      <input
        value={title}
        onChange={handleTitleChange}
      />
      </label>
      <br></br>
      <label>
      Author:
      <input
        value={author}
        onChange={handleAuthorChange}
      />
      </label>
      <br></br>
      <label>
      URL:
      <input
        value={url}
        onChange={handleUrlChange}
      />
      </label>
      <br></br>
      <button type="submit">Create</button>
    </form>
  )
}

export default BlogForm
