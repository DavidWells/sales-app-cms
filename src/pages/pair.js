import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { push } from 'gatsby-link'
import CardsPair from '../components/CardsPair'
import BottomNavBar from '../components/BottonNavBar'
import { connect } from 'unistore/react'
import actions from '../store/actions'
import PageTransition from 'gatsby-plugin-page-transitions'

class Pair extends Component {
  componentWillUnmount() {
    this.props.resetTrendItem()
  }
  render() {
    return (
      <PageTransition transitionTime={400}>
        <CardsPair />
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

Pair.propTypes = {}

const mapStateToProps = ({ trendItemSelected }) => ({
  trendItemSelected,
})

export default connect(
  mapStateToProps,
  actions
)(Pair)
