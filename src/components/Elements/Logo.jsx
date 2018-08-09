import React from 'react'
import PropTypes from 'prop-types'
// import defaultLogo from '../../assets/kay-logo.png'
import styled from 'styled-components'

import { connect } from 'unistore/react'

const StyledLogo = styled.img`
  max-width: 130px;
  max-height: 37px;
`

const Logo = props => {
  return <StyledLogo className="logo" src={props.logo} alt="" />
}

// Logo.defaultProps = {
//   src: defaultLogo,
//   logo: defaultLogo,
// }
Logo.propTypes = {
  // src: PropTypes.string,
  logo: PropTypes.any,
}

const mapStateToProps = ({ logo }) => ({
  logo,
})
export default connect(mapStateToProps)(Logo)
