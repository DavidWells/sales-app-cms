import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import CardsWithCamera from '../../components/CardsWithCamera'
import { siteMetadata } from '../../../gatsby-config'
import BottomNavBar from '../../components/BottonNavBar'

class Improve extends Component {
  render() {
    return (
      <div className="improve-page">
        <Helmet title={`Improve | ${get(siteMetadata, 'title')}`} />
        <CardsWithCamera />
        <BottomNavBar location={this.props.location} />
      </div>
    )
  }
}

Improve.propTypes = {}

export default Improve
