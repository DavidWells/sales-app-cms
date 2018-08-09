import React from 'react'
import Link, { push } from 'gatsby-link'
import { connect } from 'unistore/react'
import { Toolbar, NavLink } from 'rebass'
import styled from 'styled-components'
import Img from 'react-image'

// import Logo from '../Elements/Logo'
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
  background: #3c4350;
  background: white;
  border-bottom: 1px solid whitesmoke;
`

const Logo = styled(Img)`
  max-width: 130px;
  max-height: 37px;
`

class SiteNavi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: this.props.logo,
    }
  }
  render() {
    const { location, title } = this.props
    console.log(this.state.logo)
    return (
      <Header>
        <NavLink is="div">
          <CustomLink to={'/'} color={'white'}>
            <Logo
              key={this.state.logo}
              className="logo"
              src={this.state.logo}
              alt="logo"
            />
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

const mapStateToProps = ({ data, store, logo }) => ({
  data,
  store,
  logo,
})
export default connect(mapStateToProps)(SiteNavi)
