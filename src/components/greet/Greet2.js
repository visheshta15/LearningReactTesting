import React from 'react'
import PropTypes from 'prop-types'

function Greet2( props ) {
  return (
    <div>
        Hello {props.name}
    </div>
  )
}

export default Greet2

Greet2.propTypes  = {
    name : PropTypes.string
}