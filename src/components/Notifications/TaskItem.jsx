import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Avatar, Badge, Text, Flex, Box } from 'rebass'
import checkIcon from '../../assets/check.svg'
import instagramLogo from '../../assets/instagram.svg'

const Task = styled.div`
  padding: 20px;
  background: ${props => (props.done ? '#e3eef9' : 'white')};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 250ms ease-in-out;
  border-bottom: 1px solid #f1f1f1;
  &:hover {
    @media (min-width: 700px) {
      background: #e3eef9;
    }
  }
`

const TaskBadge = styled(Badge)`
  padding: 14px;
`

const InstaBadge = styled.img`
  margin-left: 4px;
  margin-right: 4px;
`

class TaskItem extends React.Component {
  render() {
    return (
      <Task onClick={this.props.onClick} done={this.props.done}>
        <Flex alignItems="center">
          <Flex alignItems="center">
            {this.props.badge === 'instagram' ? (
              <InstaBadge width={28} src={instagramLogo} alt="" />
            ) : (
              <TaskBadge py={3} px={3} bg={this.props.badge} borderRadius={5} />
            )}

            <Text ml={3}>{this.props.taskName}</Text>
          </Flex>
          {this.props.done && <div># </div>}
        </Flex>
        {this.props.selected && <Avatar size={20} src={checkIcon} />}
      </Task>
    )
  }
}

TaskItem.propTypes = {
  taskName: PropTypes.any,
  index: PropTypes.number,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  badge: PropTypes.any,
  done: PropTypes.bool,
}

export default TaskItem
