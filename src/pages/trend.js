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
  render() {
    return (
      <PageTransition transitionTime={400}>
        <CardsTrend />
        <BottomNavBar
          text="Done"
          buttonDisabled={this.props.trendItemSelected}
          buttonClick={() => push('/notifications')}
          location={this.props.location}
        />
      </PageTransition>
    )
  }
}

Trend.propTypes = {}

const mapStateToProps = ({ trendItemSelected }) => ({
  trendItemSelected,
})

export default connect(
  mapStateToProps,
  actions
)(Trend)
