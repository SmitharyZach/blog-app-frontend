import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async blogObject => {
  let config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, blogObject, config)
  return response.data
}

const like = async (id, likedBlog) => {
  const response = await axios.put(`${baseUrl}/${id}`, likedBlog)
  return response.data
}

const remove = async id => {

  let config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

export default { setToken, getAll, create, like, remove }
