import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'unistore/react'
import Link, { push } from 'gatsby-link'
import userIcon from '../../assets/user.png'
import styled from 'styled-components'
import { Flex, ButtonTransparent, Badge } from 'rebass'
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
  z-index: 7;
`
const Notification = styled(Badge)`
  position: absolute;
  padding: 1px 4px;
  border-radius: 8px;
  right: 15px;
  top: 3px;
`

const NotificationButton = styled(ButtonTransparent)`
  position: relative;
  padding-right: 25px;
`

class BottomNavBar extends React.Component {
  getButtonState = () => {
    if (this.props.location !== null) {
      if (!this.props.location.pathname.includes('notifications')) {
        return (
          <Button disabled={!this.props.buttonFeed}>{this.props.text}</Button>
        )
      } else if (this.props.location.pathname.includes('improve')) {
        return (
          <Button disabled={!this.props.buttonImprove}>
            {this.props.text}
          </Button>
        )
      }
    }
  }

  render() {
    return (
      <Nav>
        <Flex justifyContent="space-between" alignItems="center">
          <Link to="/notifications">
            <NotificationButton>
              <Notification bg="red"> 2 </Notification>
              <img width={25} src={NotificationIcon} alt="" />
            </NotificationButton>
          </Link>

          <Button disabled={!this.props.buttonDisabled}>
            {this.props.text}
          </Button>

          <ButtonTransparent>
            <img width={25} src={AnalyticsIcon} alt="" />
          </ButtonTransparent>
        </Flex>
      </Nav>
    )
  }
}

BottomNavBar.defaultProps = {
  src: userIcon,
  text: 'Done',
  buttonDisabled: true,
}
BottomNavBar.propTypes = {
  src: PropTypes.string,
  location: PropTypes.any,
  text: PropTypes.string,
  buttonDisabled: PropTypes.bool,
}

const mapStateToProps = ({ buttonFeed, buttonImprove }) => ({
  buttonFeed,
})

export default connect(mapStateToProps)(BottomNavBar)
