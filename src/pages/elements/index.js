import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Heading, Subhead } from 'rebass'
import Button from '../../components/Elements/Button'

class Elements extends Component {
  render() {
    return (
      <div>
        <Heading>Awesome Title </Heading>
        <Subhead> Subhead </Subhead>
        <Button>
          <span>some text</span>
        </Button>
      </div>
    )
  }
}

Elements.propTypes = {}

export default Elements
