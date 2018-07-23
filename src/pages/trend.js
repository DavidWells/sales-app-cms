import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardsTrend from '../components/CardsTrend'
import BottomNavBar from '../components/BottonNavBar'

import { connect } from 'unistore/react'
import actions from '../store/actions'

class Trend extends Component {
  componentWillUnmount() {
    this.props.resetTrendItem()
  }
  render() {
    return (
      <div className="trend-page">
        <CardsTrend />
        <BottomNavBar
          text="Done"
          buttonDisabled={this.props.trendItemSelected}
          location={this.props.location}
        />
      </div>
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
