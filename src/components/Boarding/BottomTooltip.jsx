import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'unistore/react'
import actions from '../../store/actions'
import BottomArrowIcon from '../../assets/down-arrow.svg'

const WrapTooltip = styled.div`
  position: absolute;
  left: 40px;
  bottom: 55px;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: all 400ms ease-in-out;
`

const TopArrow = styled.img`
  max-width: 30px;
  position: relative;
  transform: rotate(18deg) translate(20px, -10px);
`

const Text = styled.div`
  margin-bottom: 8px;
  padding: 10px 15px;
  background: #3190f0;
  color: white;
  box-shadow: 1px 2px 12px #00000061;
  text-align: center;
  margin-left: 28px;
`

const BottomTooltip = props => {
  return (
    <WrapTooltip
      show={props.showBoarding}
      className={`tooltip top-tooltip`}
      // onClick={props.hideBoarding}
    >
      <Text>2. Follow your weekly tasks</Text>
      <TopArrow src={BottomArrowIcon} />
    </WrapTooltip>
  )
}

BottomTooltip.propTypes = {}

const mapStateToProps = ({ showBoarding }) => ({
  showBoarding,
})
export default connect(
  mapStateToProps,
  actions
)(BottomTooltip)
