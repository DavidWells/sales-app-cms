import React from 'react'
import PropTypes from 'prop-types'
import defaultLogo from '../../assets/kay-logo.png'
import styled from 'styled-components'

const StyledLogo = styled.img`
  max-width: 130px;
  max-height: 37px;
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
