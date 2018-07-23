import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'unistore/react'
import actions from '../../store/actions'

const WrapBoarding = styled.div`
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: all 500ms ease-in-out;
`

class Boarding extends Component {
  render() {
    return (
      <WrapBoarding
        show={this.props.showBoarding}
        className="boarding"
        // onClick={this.props.hideBoarding}
      />
    )
  }
}

Boarding.propTypes = {
  show: PropTypes.bool,
}

const mapStateToProps = ({ showBoarding }) => ({
  showBoarding,
})
export default connect(
  mapStateToProps,
  actions
)(Boarding)
