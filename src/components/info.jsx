import React from 'react'
import PropTypes from 'prop-types'

const Info = ({type, children}) => {

  const styles = {
    color: type === "info" ? "purple": "red"
  }

  return (
    <div style={styles}>
      {type === "info" ? "Note: ": ""}
      {children}
    </div>
  )
}

Info.propTypes = {
    type: PropTypes.oneOf(["info", "error"]).isRequired
}

export default Info


// Javascript Script Element jsx
