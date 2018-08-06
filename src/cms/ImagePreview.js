import React from 'react'
import PropTypes from 'prop-types'

const StringPreview = ({ value }) => (
  <div>
    {value}: <img width="50" src={value} />
  </div>
)

StringPreview.propTypes = {
  value: PropTypes.node,
}

export default StringPreview
