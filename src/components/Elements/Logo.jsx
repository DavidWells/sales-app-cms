import React from 'react'
import PropTypes from 'prop-types'
// import defaultLogo from '../../assets/kay-logo.png'
import styled from 'styled-components'

// import { connect } from 'unistore/react'

const StyledLogo = styled.img`
  max-width: 130px;
  max-height: 37px;
`

const Logo = props => {
  console.log(props.logoImage)
  return <StyledLogo className="logo" src={props.logoImage} alt="" />
}

Logo.propTypes = {
  logoImage: PropTypes.any,
}

export default Logo
