import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'unistore/react'
import actions from '../../store/actions'
import smoothscroll from 'smoothscroll-polyfill'

const NavList = styled.nav`
  mask-image: linear-gradient(
    to right,
    transparent,
    black 20px,
    black 90%,
    transparent
  );
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  flex-grow: 1;
  max-width: 100%;
  max-width: 343px;
  &::-webkit-scrollbar {
    display: none;
  }
`

const NavItem = styled.a`
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  /* transition: all 0.2s ease-out; */
  padding-left: 15px;
  padding-right: 15px;
  font-weight: ${props => (props.isActive ? '600' : '300')};
  color: ${props => (props.isActive ? '#3c4350' : 'gray')};
`

const Span = styled.span`
  padding-bottom: 7px;
  transition: all 0.2s ease;
  border-bottom: 2px solid
    ${props =>
      props.isActive
        ? props => props.theme.colors[props.badge]
        : ' transparent'};
`

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        'Best Selller',
        'High probability',
        'New',
        'On sale',
        'Missing',
        'Favorites',
      ],
      currentIndex: 0,
      selectedItem: this.props.currentTopMenu,
    }
  }

  componentDidMount() {
    smoothscroll.polyfill()
    this.props.setCurrentTopMenu(this.props.itemCategories[0].id)
  }

  setCurrentIndex = index => {
    this.setState({
      currentIndex: index,
    })
  }

  scrollTo = id => {
    if (document.getElementById(id) !== null) {
      let navlist = document.getElementById('navlist')
      let element = document.getElementById(id).offsetTop - 110
      window.scroll({ top: element, behavior: 'smooth' })
      // if (this.state.currentIndex > 1) {
      //   navlist.scrollLeft = 120
      // }

      this.props.setCurrentTopMenu(id)
    }
  }

  scrollNav = id => {
    const element = document.getElementById(id)
    if (element !== null) {
      window.scroll({ left: element, behavior: 'smooth' })
    }
  }
  render() {
    const { items, currentIndex } = this.state
    return (
      <NavList id="navlist">
        {this.props.itemCategories.map((item, index) => (
          <NavItem
            key={index}
            id={`nav-${item.id}`}
            isActive={item.id === this.props.currentTopMenu}
            onClick={() => {
              this.setCurrentIndex(index)
              this.scrollTo(item.id)
            }}
          >
            <Span
              badge={item.id}
              isActive={item.id === this.props.currentTopMenu}
            >
              {item.name}
            </Span>
          </NavItem>
        ))}
      </NavList>
    )
  }
}

const mapStateToProps = ({ itemCategories, currentTopMenu }) => ({
  itemCategories,
  currentTopMenu,
})

export default connect(
  mapStateToProps,
  actions
)(Nav)
