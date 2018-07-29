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
  transition: all 0.2s ease-out;
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
    }
  }

  componentDidMount() {
    smoothscroll.polyfill()
  }

  setCurrentIndex = index => {
    this.setState({
      currentIndex: index,
    })
  }

  scrollTo = id => {
    if (document.getElementById(id) !== null) {
      let element = document.getElementById(id).offsetTop - 110
      window.scroll({ top: element, behavior: 'smooth' })
      this.props.setCurrentTopMenu(id)
    }
  }

  render() {
    const { items, currentIndex } = this.state
    return (
      <NavList>
        {this.props.itemCategories.map((item, index) => (
          <NavItem
            key={index}
            // id={item.id}
            isActive={index === currentIndex}
            onClick={() => {
              this.setCurrentIndex(index)
              this.scrollTo(item.id)
            }}
          >
            <Span badge={item.id} isActive={index === currentIndex}>
              {item.name}
            </Span>
          </NavItem>
        ))}
      </NavList>
    )
  }
}

const mapStateToProps = ({ itemCategories }) => ({
  itemCategories,
})
export default connect(
  mapStateToProps,
  actions
)(Nav)
