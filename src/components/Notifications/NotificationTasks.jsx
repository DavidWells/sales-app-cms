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
    const helpYourTendingItems = this.props.tasks['help_your_trending_items']
    const newInstagramPost = this.props.tasks['new_instagram_post']
    const completeTheLook = this.props.tasks['complete_the_look']
    const recordBestSellerLocations = this.props.tasks[
      'record_best_seller_locations'
    ]

    return (
      <TaskList>
        {/* {Object.entries(this.props.tasks).map(([key, item], index) => (
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
        ))} */}
        <TaskItem
          key={0}
          badge={helpYourTendingItems.badge}
          done={this.props.tasksStatus['help_your_trending_items']}
          taskName={helpYourTendingItems.taskName}
          index={0}
          id={helpYourTendingItems.id}
          path={helpYourTendingItems.path}
          selected={false}
          type={helpYourTendingItems.type}
          // onClick={() => push(`${item.type}`)}
        />
        <TaskItem
          key={1}
          badge={newInstagramPost.badge}
          done={this.props.tasksStatus['new_instagram_post']}
          taskName={newInstagramPost.taskName}
          index={1}
          id={newInstagramPost.id}
          path={newInstagramPost.path}
          selected={false}
          type={newInstagramPost.type}
          // onClick={() => push(`${item.type}`)}
        />
        <TaskItem
          key={2}
          badge={completeTheLook.badge}
          done={this.props.tasksStatus['complete_the_look']}
          taskName={completeTheLook.taskName}
          index={2}
          id={completeTheLook.id}
          path={completeTheLook.path}
          selected={false}
          type={completeTheLook.type}
          // onClick={() => push(`${item.type}`)}
        />
        <TaskItem
          key={3}
          badge={recordBestSellerLocations.badge}
          done={this.props.tasksStatus['record_best_seller_locations']}
          taskName={recordBestSellerLocations.taskName}
          index={3}
          id={recordBestSellerLocations.id}
          path={recordBestSellerLocations.path}
          selected={false}
          type={recordBestSellerLocations.type}
          // onClick={() => push(`${item.type}`)}
        />
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

const mapStateToProps = ({ tasks, tasksStatus }) => ({
  tasks,
  tasksStatus,
})
export default connect(mapStateToProps)(NotificationTasks)
