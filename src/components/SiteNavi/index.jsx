import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import { Toolbar, NavLink } from 'rebass'
import styled from 'styled-components'

import Logo from '../Elements/Logo'
import ProfileButton from '../Elements/ProfileButton'

const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
`
const Header = styled(Toolbar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  background: linear-gradient(135deg, #736cc7 21%, #3190f0 100%, #3190f0 100%);
`

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <Header>
        <NavLink is="div">
          <CustomLink to={'/'} color={'white'}>
            <Logo />
          </CustomLink>
        </NavLink>
        {/* <NavLink ml="auto" is="div">
          <CustomLink ml="auto" to={'/profile/'}>
            Profile
          </CustomLink>
        </NavLink> */}
        <NavLink ml="auto">
          <ProfileButton />
        </NavLink>
      </Header>
    )
  }
}

export default SiteNavi
