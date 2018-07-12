import React from 'react'
import PropTypes from 'prop-types'
import { Button as Btn } from 'rebass'
import styled from 'styled-components'

const CustomButton = styled(Btn)`
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.125));
  box-shadow: 0 5px 10px rgba(99, 94, 190, 0.4);
  cursor: pointer;
  background-color: ${props => props.color};
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
  &:hover {
    opacity: 0.85;
  }
  &:focus {
    box-shadow: none;
  }
`

const Button = props => {
  return <CustomButton color="#635ebe" {...props} />
}

Button.defaultProps = {
  color: '#635ebe',
}
Button.propTypes = {
  color: PropTypes.string,
}

export default Button
