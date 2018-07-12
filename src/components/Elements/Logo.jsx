import React from 'react'
import PropTypes from 'prop-types'
import defaultLogo from '../../assets/logo-white.png'
import styled from 'styled-components'

const StyledLogo = styled.img`
  max-width: 150px;
`

const Logo = props => {
  return <StyledLogo className="logo" src={props.src} alt="" />
}

Logo.defaultProps = {
  src: defaultLogo,
}
Logo.propTypes = {
  src: PropTypes.string,
}

export default Logo
