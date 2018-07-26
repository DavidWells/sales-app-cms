import React from 'react'
import PropTypes from 'prop-types'
import { push } from 'gatsby-link'
import { connect } from 'unistore/react'
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
        {this.state.items.map((item, index) => (
          <TaskItem
            key={index}
            badge={item.badge}
            done={item.done}
            taskName={item.name}
            index={index}
            selected={item.selected}
            onClick={() => push(`${item.type}`)}
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
