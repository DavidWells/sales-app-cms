import React from 'react'
import PropTypes from 'prop-types'
import userIcon from '../../assets/user.png'
import styled from 'styled-components'
import Nav from '../TopNavBar/Nav'
import { Container } from 'rebass'
import TopTooltip from '../Boarding/TopTooltip'
import { connect } from 'unistore/react'

const WrapNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 13px;
  padding-bottom: 0px;
  overflow: unset;
  position: fixed;
  top: 56px;
  left: 0;
  z-index: 2;
  background: white;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
`

const CustomContainer = styled(Container)`
  position: relative;
`

const TopNavBar = props => {
  return (
    <WrapNav className="wrap-top-nav">
      <CustomContainer>
        <Nav />
        <TopTooltip />
      </CustomContainer>
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
