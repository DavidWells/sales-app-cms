import React from 'react'
import PropTypes from 'prop-types'
import { push } from 'gatsby-link'
import { connect } from 'unistore/react'
import styled from 'styled-components'
import TaskItem from './TaskItem'

const items = [
  'Highlight "Best Selllers"!',
  'Increase the sales!',
  'Keep it visible!',
]

const TaskList = styled.div``

class NotificationTasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.tasks,
    }
  }

  toggleItem = index => {
    let items = this.state.items
    items[index].selected = !items[index].selected
    this.setState({
      items,
    })
  }

  render() {
    return (
      <TaskList>
        {Object.entries(this.props.tasks).map(([key, item], index) => (
          <TaskItem
            key={index}
            badge={item.badge}
            done={false}
            taskName={item.taskName}
            index={index}
            id={item.id}
            path={item.path}
            selected={false}
            type={item.type}
            // onClick={() => push(`${item.type}`)}
          />
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

const mapStateToProps = ({ tasks }) => ({
  tasks,
})
export default connect(mapStateToProps)(NotificationTasks)
