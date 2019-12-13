import React, { useState } from 'react'

const Blog = ({ blog, likeBlog, removeBlog }) => {
  const [showTitleOnly, setShowTitleOnly] = useState(true)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 2,
    border: 'solid',
    borderWidth: 2,
    marginBottom: 5,

    }

    const titleStyle = {
      color: 'green'
    }

  return (
    <div style={blogStyle}>
      <div onClick={() => setShowTitleOnly(!showTitleOnly)}>"{blog.title}" by {blog.author}</div>
        <div>{showTitleOnly === true ?
          <div style={titleStyle}></div> :
          <>
          {blog.url}
          <br></br>
          Added by {blog.user.username}
          <br></br>
          {blog.likes} likes<button onClick={likeBlog}>like</button>
          <br></br>
          <button onClick={removeBlog}>remove</button>
          </>
          }
      </div>

    </div>
  )
}

export default Blog
