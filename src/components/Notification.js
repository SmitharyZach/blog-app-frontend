import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div>
      <b><h1>{message}</h1></b>
    </div>
  )
}

export default Notification
