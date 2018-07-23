import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'unistore/react'
import actions from '../../store/actions'
import TopArrowIcon from '../../assets/up-arrow.svg'

const WrapTooltip = styled.div`
  position: absolute;
  left: 40px;
  top: 30px;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`

const TopArrow = styled.img`
  max-width: 30px;
`

const Text = styled.div`
  margin-top: 5px;
  padding: 15px 20px;
  background: #3190f0;
  color: white;
  box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.3803921568627451);
  text-align: center;
`

const TopTooltip = props => {
  return (
    <WrapTooltip
      show={props.showBoarding}
      className="tooltip top-tooltip"
      onClick={props.hideBoarding}
    >
      <TopArrow src={TopArrowIcon} />
      <Text>1. Learn about your store highlights!</Text>
    </WrapTooltip>
  )
}

TopTooltip.propTypes = {}

const mapStateToProps = ({ showBoarding }) => ({
  showBoarding,
})
export default connect(
  mapStateToProps,
  actions
)(TopTooltip)
