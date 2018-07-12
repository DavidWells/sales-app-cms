import React from 'react'
import PropTypes from 'prop-types'
import userIcon from '../../assets/user.png'
import styled from 'styled-components'
import { Flex, ButtonTransparent } from 'rebass'
import NotificationIcon from '../../assets/shopping-list.svg'
import AnalyticsIcon from '../../assets/bar-chart.svg'
import Button from '../Elements/Button'

const Nav = styled.div`
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
`

const BottomNavBar = props => {
  return (
    <Nav>
      <Flex justifyContent="space-between" alignItems="center">
        <ButtonTransparent>
          <img width={25} src={NotificationIcon} alt="" />
        </ButtonTransparent>

        <Button color="green">I GOT IT</Button>

        <ButtonTransparent>
          <img width={25} src={AnalyticsIcon} alt="" />
        </ButtonTransparent>
      </Flex>
    </Nav>
  )
}

BottomNavBar.defaultProps = {
  src: userIcon,
}
BottomNavBar.propTypes = {
  src: PropTypes.string,
}

export default BottomNavBar
