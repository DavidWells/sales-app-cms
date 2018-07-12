import React from 'react'
import PropTypes from 'prop-types'
import { Button as Btn } from 'rebass'
import styled from 'styled-components'

const CustomButton = styled(Btn)`
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.125));
  box-shadow: 0 5px 10px rgba(99, 94, 190, 0.4);
  cursor: pointer;
  background-color: #635ebe;
  border: 1px solid #635ebe;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 15px;
  padding: 8px 20px;
  transition: all 300ms ease-in-out;
  min-height: 36px;
  line-height: 1.4em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  &:hover {
    background-color: #5853ba;
    border: 1px solid #5853ba;
  }
  &:focus {
    box-shadow: none;
  }
`

const Button = props => {
  return (
    <div>
      <CustomButton {...props} />
    </div>
  )
}

Button.defaultProps = {}
Button.propTypes = {}

export default Button
