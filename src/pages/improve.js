import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link, { push } from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { siteMetadata } from '../../gatsby-config'
import CardsImprove from '../components/CardsImprove'
import BottomNavBar from '../components/BottonNavBar'

import { connect } from 'unistore/react'
import actions from '../store/actions'

class Improve extends Component {
  componentWillUnmount() {
    console.log('componentUnmounted')
    this.props.resetImproveSelectedItems()
  }
  render() {
    return (
      <div className="improve-page">
        <Helmet title={`Improve | ${get(siteMetadata, 'title')}`} />
        <CardsImprove />
        <BottomNavBar
          text="Done"
          buttonDisabled={this.props.improvePageSelectedItems > 0}
          buttonClick={() => push('/notifications')}
          location={this.props.location}
        />
      </div>
    )
  }
}

Improve.propTypes = {}

const mapStateToProps = ({ improvePageSelectedItems, buttonImprove }) => ({
  improvePageSelectedItems,
  buttonImprove,
})
export default connect(
  mapStateToProps,
  actions
)(Improve)
