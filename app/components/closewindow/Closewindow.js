import React from 'react'
import PropTypes from 'prop-types'

const Closewindow = props => {
  return (
    <div>
        <i className='fas fa-window-close' style={{cursor : 'pointer'}} onClick={props.onClick}></i>
    </div>
  )
}

Closewindow.propTypes = {
    
}

export default Closewindow