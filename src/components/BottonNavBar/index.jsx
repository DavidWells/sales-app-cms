import React from 'react'
import PropTypes from 'prop-types'
import userIcon from '../../assets/user.png'
import styled from 'styled-components'

const ProfileIcon = styled.img`
  max-width: 50px;
`

const BottomNavBar = props => {
  return (
    <div>
      <div>dsd</div>
    </div>
  )
}

BottomNavBar.defaultProps = {
  src: userIcon,
}
BottomNavBar.propTypes = {
  src: PropTypes.string,
}

export default BottomNavBar
