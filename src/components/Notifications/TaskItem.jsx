import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Avatar, Badge, Text, Flex } from 'rebass'
import checkIcon from '../../assets/check.svg'

const Task = styled.div`
  padding: 20px;
  background: white;
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

class TaskItem extends Component {
  state = {
    selected: false,
  }
  toggleItem = () => {
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {
    return (
      <Task onClick={this.toggleItem}>
        <Flex>
          <Badge bg="#3190f0">{this.props.index + 1}</Badge>
          <Text ml={3}>{this.props.taskName}</Text>
        </Flex>
        {this.state.selected && <Avatar size={20} src={checkIcon} />}
      </Task>
    )
  }
}

TaskItem.propTypes = {
  taskName: PropTypes.any,
  index: PropTypes.number,
}

export default TaskItem
