import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NotificationTasks from '../../components/Notifications/NotificationTasks'
import styled from 'styled-components'

const NotificationText = styled.h4`
  font-size: 26px;
`

class NotificationsPage extends Component {
  render() {
    return (
      <div className="notification-page">
        <NotificationText>Please complete your tasks</NotificationText>
        <NotificationTasks />
      </div>
    )
  }
}

NotificationsPage.propTypes = {}

export default NotificationsPage
