import React from 'react'
import PropTypes from 'prop-types'

const ImagePreview = ({ value }) => (
  <div>
    {value}: <img width="50" src={value} />
  </div>
)

ImagePreview.propTypes = {
  value: PropTypes.node,
}

export default ImagePreview
