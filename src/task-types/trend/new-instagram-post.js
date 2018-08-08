import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link, { push } from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { siteMetadata } from '../../../gatsby-config'
import CardsTrend from '../../components/CardsTrend'
import BottomNavBar from '../../components/BottonNavBar'
import { connect } from 'unistore/react'
import actions from '../../store/actions'
import PageTransition from 'gatsby-plugin-page-transitions'

class Trend extends Component {
  componentWillUnmount() {
    this.props.resetTrendItem()
  }
  componentDidMount() {
    this.props.selectCurrentTaskView('new_instagram_post')
  }
  updateTaskAndRedirect = () => {
    this.props.selectTasks(this.props.tasksStatus, this.props.currentTaskView)
    push('/notifications')
  }

  render() {
    return (
      <PageTransition transitionTime={400}>
        <Helmet
          title={`People might search for this look today! | ${get(
            siteMetadata,
            'title'
          )}`}
        />
        <CardsTrend
          product={this.props.tasks['new_instagram_post'].product}
          title="People might search for this look today!"
        />
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

const mapStateToProps = ({
  trendItemSelected,
  tasks,
  tasksStatus,
  currentTaskView,
}) => ({
  trendItemSelected,
  tasks,
  tasksStatus,
  currentTaskView,
})

export default connect(
  mapStateToProps,
  actions
)(Trend)
