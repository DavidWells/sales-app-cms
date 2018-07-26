import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link, { push } from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { siteMetadata } from '../../gatsby-config'
import CardsImprove from '../components/CardsImprove'
import BottomNavBar from '../components/BottonNavBar'
import PageTransition from 'gatsby-plugin-page-transitions'

import { connect } from 'unistore/react'
import actions from '../store/actions'

class Improve extends Component {
  componentWillUnmount() {
    this.props.resetImproveSelectedItems()
  }

  updateTaskAndRedirect = () => {
    this.props.selectTasks(this.props.tasks, 12)
    push('/notifications')
  }
  render() {
    return (
      <PageTransition transitionTime={400}>
        <Helmet title={`Improve | ${get(siteMetadata, 'title')}`} />
        <CardsImprove />
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
  buttonImprove,
  tasks,
}) => ({
  improvePageSelectedItems,
  buttonImprove,
  tasks,
})
export default connect(
  mapStateToProps,
  actions
)(Improve)
