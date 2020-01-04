import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import loginService from './services/login'
import blogService from './services/blogs'
import { useField } from './hooks'

const App = () => {
  const u = useField('text')
  const username = u.value
  const [password, setPassword] = useState ('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [blogs, setBlogs] = useState([])
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => setBlogs(initialBlogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      u.reset()
      setPassword('')
    } catch (error) {
      setMessage('Wrong Credentials')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogappUser')
    window.location.reload()
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
    <h1> Log into blog app </h1>
      <div>
        Username
          <input {...u} reset="blah"/>
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )
  function compare(a, b) {

    const blogA = a.likes
    const blogB = b.likes

    let comparison = 0
    if (blogA > blogB) {
      comparison = -1
    } else if (blogA < blogB) {
      comparison = 1
    }

    return comparison
  }

  const blogList = () => (
    <div>
      {blogs.sort(compare).map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          likeBlog={() => likeBlog(blog.id)}
          removeBlog={() => removeBlog(blog.id)}
        />
      )}
    </div>
  )

  const likeBlog = id => {
    const blogToLike = blogs.find(b => b.id === id)
    console.log(blogToLike)
    // const copy = JSON.parse(JSON.stringify(blogToLike))
    const likedBlog = { ...blogToLike, likes: blogToLike.likes + 1 }

    blogService
      .like(id, likedBlog)
      .then(returnedBlog => {
        setBlogs(blogs.map(blog => blog.id !== id ? blog : returnedBlog))
      })
  }

  const removeBlog = id => {

  if (window.confirm(`Do you really want to delete blog?`))
    blogService
      .remove(id)
    window.location.reload()
  }

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: title.value,
      author: author.value,
      url: url.value,
    }

    blogService
      .create(blogObject)
      .then(blog => {
        setBlogs(blogs.concat(blog))
      })
      setMessage(`A new blog "${blogObject.title}" added`)
      title.reset()
      author.reset()
      url.reset()
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }

  return (

    <div>
    <Notification message={message} />
      {user === null ?
        loginForm() :
        <div>
          <h1>Blogs</h1>
          <p>{user.username} is logged in
          <button onClick={handleLogout}>
          Logout
          </button>
          </p>
          <div>
            <Togglable buttonLabel="new blog">
              <BlogForm
                title={title.value}
                author={author.value}
                url={url.value}
                addBlog={addBlog}
                handleTitleChange={title.onChange}
                handleAuthorChange={author.onChange}
                handleUrlChange={url.onChange}
              />
            </Togglable>
            </div>
          {blogList()}
        </div>
      }
    </div>
  )
}

export default App
