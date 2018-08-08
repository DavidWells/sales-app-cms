import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link, { push } from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { siteMetadata } from '../../../gatsby-config'
import CardsImprove from '../../components/CardsImprove'
import BottomNavBar from '../../components/BottonNavBar'
import PageTransition from 'gatsby-plugin-page-transitions'

import { connect } from 'unistore/react'
import actions from '../../store/actions'

class Improve extends Component {
  componentWillUnmount() {
    this.props.resetImproveSelectedItems()
  }

  componentDidMount() {
    this.props.selectCurrentTaskView('record_best_seller_locations')
  }

  updateTaskAndRedirect = () => {
    this.props.selectTasks(this.props.tasksStatus, this.props.currentTaskView)
    push('/notifications')
  }
  render() {
    return (
      <PageTransition transitionTime={400}>
        <Helmet
          title={`Take a photo of these items new location | ${get(
            siteMetadata,
            'title'
          )}`}
        />
        <CardsImprove
          data={this.props.tasks['record_best_seller_locations'].products}
          title="Take a photo of these items new location"
        />
        <BottomNavBar
          text="Done"
          buttonDisabled={this.props.improvePageSelectedItems > 0}
          buttonClick={() => this.updateTaskAndRedirect()}
          location={this.props.location}
          type="improve"
        />
      </PageTransition>
    )
  }
}

Improve.propTypes = {}

const mapStateToProps = ({
  improvePageSelectedItems,
  tasks,
  tasksStatus,
  currentTaskView,
}) => ({
  improvePageSelectedItems,
  tasks,
  tasksStatus,
  currentTaskView,
})
export default connect(
  mapStateToProps,
  actions
)(Improve)
