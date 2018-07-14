import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TaskItem from './TaskItem'

const items = [
  'Highlight "Bst Selllers"!',
  'Increase the sales!',
  'Keep it visible!',
]

const TaskList = styled.div``

class NotificationTasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          name: 'Highlight "Bst Selllers"!',
          selected: false,
        },
        {
          name: 'Increase the sales!',
          selected: false,
        },
        {
          name: 'Keep it visible!',
          selected: false,
        },
      ],
    }
  }
  render() {
    return (
      <TaskList>
        {this.state.items.map((item, index) => (
          <TaskItem key={index} taskName={item.name} index={index} />
        ))}
      </TaskList>
    )
  }
}

NotificationTasks.defaultProps = {
  items: items,
}
NotificationTasks.propTypes = {
  items: PropTypes.array,
}

export default NotificationTasks
