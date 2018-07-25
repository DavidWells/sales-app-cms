import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NotificationTasks from '../../components/Notifications/NotificationTasks'
import styled from 'styled-components'
import PageTransition from 'gatsby-plugin-page-transitions'

const NotificationText = styled.h4`
  font-size: 26px;
  text-align: center;
`

class NotificationsPage extends Component {
  render() {
    return (
      <PageTransition transitionTime={400}>
        <NotificationText>Please complete your weekly tasks</NotificationText>
        <NotificationTasks />
      </PageTransition>
    )
  }
}

NotificationsPage.propTypes = {}

export default NotificationsPage
