import React from 'react'
import PropTypes from 'prop-types'
import userIcon from '../../assets/user.png'
import styled from 'styled-components'
import Nav from '../TopNavBar/Nav'

const WrapNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  overflow: hidden;
`

const TopNavBar = props => {
  return (
    <WrapNav>
      <Nav />
    </WrapNav>
  )
}

TopNavBar.defaultProps = {
  src: userIcon,
}
TopNavBar.propTypes = {
  src: PropTypes.string,
}

export default TopNavBar
