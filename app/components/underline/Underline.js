import React from 'react'
import PropTypes from 'prop-types'

const Underline = props => {
  return (
    <div className='row'>
    <div className={props.gap}></div>
    <div className={props.className}>
      <hr />
    </div>
  </div>
  )
}

Underline.propTypes = {
  className : PropTypes.string 
}

export default Underline
