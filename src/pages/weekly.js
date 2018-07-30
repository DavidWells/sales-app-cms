import React, { Component } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../gatsby-config'
import BottomNavBar from '../components/BottonNavBar'
import PageTransition from 'gatsby-plugin-page-transitions'

import { connect } from 'unistore/react'
import actions from '../store/actions'
import CardsWeekly from '../components/CardsWeekly'

class Weekly extends Component {
  render() {
    return (
      <PageTransition transitionTime={400}>
        <Helmet title={`Weekly | ${get(siteMetadata, 'title')}`} />

        <CardsWeekly />
        <BottomNavBar
          text="Approve"
          buttonDisabled={this.props.improvePageSelectedItems > 0}
          buttonClick={() => this.updateTaskAndRedirect()}
          location={this.props.location}
          type="improve"
        />
      </PageTransition>
    )
  }
}

Weekly.propTypes = {}

const mapStateToProps = ({ tasks }) => ({
  tasks,
})

export default connect(
  mapStateToProps,
  actions
)(Weekly)
