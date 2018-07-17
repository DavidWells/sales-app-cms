import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from 'rebass'
import userIcon from '../../assets/user.png'
import styled from 'styled-components'

const ProfileIcon = styled(Avatar)`
  max-width: 40px;
  max-height 40px;
`

const ProfileButton = props => {
  return <ProfileIcon className="profile-button" src={props.src} alt="" />
}

ProfileButton.defaultProps = {
  src: userIcon,
}
ProfileButton.propTypes = {
  src: PropTypes.string,
}

export default ProfileButton
