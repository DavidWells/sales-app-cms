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
import BottomTooltip from '../Boarding/BottomTooltip'

import actions from '../../store/actions'

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
  constructor(props) {
    super(props)
    this.state = {
      shake: false,
    }
  }

  componentDidMount() {
    if (this.props.showBoarding === true) {
      console.log('showing boarding')

      window.addEventListener(
        'click',
        e => {
          if (this.props.showBoarding === true) {
            if (e.target.id !== 'bottom-nav-button') {
              this.setState({ shake: true }, () => {
                setTimeout(() => {
                  this.setState({ shake: false })
                  window.removeEventListener(
                    'click',
                    () => console.log('removed event'),
                    false
                  )
                }, 1000)
              })
            }
          }
        },
        true
      )
    }
  }

  // componentWillUnmount() {
  //   window.removeEventListener(
  //     'click',
  //     () => console.log('removed event'),
  //     false
  //   )
  // }
  render() {
    return (
      <Nav>
        <Flex justifyContent="space-between" alignItems="center">
          <BottomTooltip />
          <Link to="/notifications">
            <NotificationButton>
              <Notification bg="red"> 2 </Notification>
              <img width={25} src={NotificationIcon} alt="" />
            </NotificationButton>
          </Link>

          <Button
            id="bottom-nav-button"
            selected={this.state.shake}
            disabled={!this.props.buttonDisabled}
            onClick={this.props.buttonClick}
          >
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
  type: PropTypes.any,
  buttonDisabled: PropTypes.bool,
  buttonClick: PropTypes.func,
}

const mapStateToProps = ({ buttonFeed, showBoarding }) => ({
  buttonFeed,
  showBoarding,
})

export default connect(
  mapStateToProps,
  actions
)(BottomNavBar)
