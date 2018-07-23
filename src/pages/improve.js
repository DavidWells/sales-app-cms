import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { siteMetadata } from '../../gatsby-config'
import CardsImprove from '../components/CardsImprove'
import BottomNavBar from '../components/BottonNavBar'

import { connect } from 'unistore/react'
import actions from '../store/actions'

class Improve extends Component {
  render() {
    return (
      <div className="improve-page">
        <Helmet title={`Improve | ${get(siteMetadata, 'title')}`} />
        <CardsImprove />
        <BottomNavBar
          text="Done"
          buttonDisabled={this.props.improvePageSelectedItems > 0}
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
