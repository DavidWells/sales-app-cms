import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link, { push } from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { siteMetadata } from '../../../gatsby-config'
import CardsPair from '../../components/CardsPair'
import BottomNavBar from '../../components/BottonNavBar'
import { connect } from 'unistore/react'
import actions from '../../store/actions'
import PageTransition from 'gatsby-plugin-page-transitions'

class Pair extends Component {
  componentWillUnmount() {
    this.props.resetPairSelectedItems()
  }

  updateTaskAndRedirect = () => {
    this.props.selectTasks(this.props.tasks, this.props.currentTaskView)
    push('/notifications')
  }
  render() {
    return (
      <PageTransition transitionTime={400}>
        <Helmet title={`Complete the look! | ${get(siteMetadata, 'title')}`} />
        <CardsPair title="People attend to buy both of those items together" />
        <BottomNavBar
          text="Done"
          buttonDisabled={this.props.pairPageSelectedItems > 0}
          buttonClick={() => this.updateTaskAndRedirect()}
          location={this.props.location}
          type="pair"
        />
      </PageTransition>
    )
  }
}

Pair.propTypes = {}

const mapStateToProps = ({
  pairPageSelectedItems,
  tasks,
  currentTaskView,
}) => ({
  pairPageSelectedItems,
  tasks,
  currentTaskView,
})

export default connect(
  mapStateToProps,
  actions
)(Pair)
