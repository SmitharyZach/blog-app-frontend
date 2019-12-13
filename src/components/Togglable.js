import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideComponent = { display: visible ? 'none' : ''}
  const showComponent = { display: visible ? '' : 'none'}

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
  }

  return (
    <div>
      <div style={hideComponent}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showComponent}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )
}

export default Togglable
