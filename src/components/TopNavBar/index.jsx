import React from 'react'
import PropTypes from 'prop-types'
import userIcon from '../../assets/user.png'
import styled from 'styled-components'
import Nav from '../TopNavBar/Nav'

const WrapNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: hidden;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 2;
  background: white;
  width: 100%;
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
