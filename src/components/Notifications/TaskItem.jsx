import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Avatar, Badge, Text, Flex, Box, Image } from 'rebass'
import { connect } from 'unistore/react'
import actions from '../../store/actions'
import { push } from 'gatsby-link'
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

const FullWidthFlex = styled(Flex)`
  flex-basis: 100%;
`

class TaskItem extends React.Component {
  handleTask = () => {
    this.props.selectCurrentTaskView(this.props.id)
    push(this.props.path)
  }
  render() {
    return (
      <Task onClick={this.handleTask} done={this.props.done}>
        <FullWidthFlex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            {this.props.badge === 'instagram' ? (
              <InstaBadge width={28} src={instagramLogo} alt="" />
            ) : (
              <TaskBadge py={3} px={3} bg={this.props.badge} borderRadius={5} />
            )}

            <Text ml={3}>{this.props.taskName}</Text>
          </Flex>
          {this.props.done && (
            <Box>
              <Image src={checkIcon} alt="" width={20} />
            </Box>
          )}
        </FullWidthFlex>
        {this.props.selected && <Avatar size={20} src={checkIcon} />}
      </Task>
    )
  }
}

TaskItem.propTypes = {
  taskName: PropTypes.any,
  index: PropTypes.number,
  id: PropTypes.any,
  path: PropTypes.any,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  badge: PropTypes.any,
  type: PropTypes.any,
  done: PropTypes.bool,
}

const mapStateToProps = ({ currentTaskView }) => ({
  currentTaskView,
})

export default connect(
  mapStateToProps,
  actions
)(TaskItem)
