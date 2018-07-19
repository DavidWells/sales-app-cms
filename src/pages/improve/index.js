import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import CardsWithCamera from '../../components/CardsWithCamera'
import { siteMetadata } from '../../../gatsby-config'

class Improve extends Component {
  render() {
    return (
      <div>
        <Helmet title={`Improve | ${get(siteMetadata, 'title')}`} />
        <CardsWithCamera />
      </div>
    )
  }
}

Improve.propTypes = {}

export default Improve
