import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link, { push } from 'gatsby-link'
import CardsTrend from '../components/CardsTrend'
import BottomNavBar from '../components/BottonNavBar'
import { connect } from 'unistore/react'
import actions from '../store/actions'
import PageTransition from 'gatsby-plugin-page-transitions'

class Trend extends Component {
  componentWillUnmount() {
    this.props.resetTrendItem()
  }

  updateTaskAndRedirect = () => {
    this.props.selectTasks(this.props.tasks, this.props.currentTaskView)
    push('/notifications')
  }

  render() {
    return (
      <PageTransition transitionTime={400}>
        <CardsTrend />
        <BottomNavBar
          text="Done"
          buttonDisabled={this.props.trendItemSelected}
          buttonClick={() => this.updateTaskAndRedirect()}
          location={this.props.location}
          type="trend"
        />
      </PageTransition>
    )
  }
}

Trend.propTypes = {}

const mapStateToProps = ({ trendItemSelected, tasks, currentTaskView }) => ({
  trendItemSelected,
  tasks,
  currentTaskView,
})

export default connect(
  mapStateToProps,
  actions
)(Trend)
