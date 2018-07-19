import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'rebass'

const HeadText = styled(Text)`
  font-family: 'Montserrat', 'Source Sans Pro', sans-serif;
`
const Heading = props => {
  return <HeadText textAlign="center" fontSize={2} {...props} />
}

Heading.defaultProps = {}
Heading.propTypes = {}

export default Heading
