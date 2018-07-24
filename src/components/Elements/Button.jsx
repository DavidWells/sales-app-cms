import React from 'react'
import PropTypes from 'prop-types'
import { Button as Btn } from 'rebass'
import styled, { keyframes } from 'styled-components'

const shake = keyframes`
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
`

const CustomButton = styled(Btn)`
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.125));
  box-shadow: 0 5px 10px rgba(99, 94, 190, 0.4);
  cursor: pointer;

  border: none;
  color: rgba(255, 255, 255, 0.9);

  padding: 8px 20px;
  transition: all 300ms ease-in-out;
  min-height: 36px;
  line-height: 1.4em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  pointer-events: visible;
  &:hover {
    opacity: 0.85;
  }

  &:focus {
    box-shadow: none;
  }
  &:disabled {
    opacity: 0.25;
  }
  ${props => props.selected && `animation: ${shake} 1000ms ease-in ;`};
`

const Button = props => (
  <CustomButton selected={props.selected} bg={props.bg} {...props} />
)

Button.defaultProps = {
  bg: 'greenButton',
}
Button.propTypes = {
  bg: PropTypes.string,
  selected: PropTypes.any,
}

export default Button
