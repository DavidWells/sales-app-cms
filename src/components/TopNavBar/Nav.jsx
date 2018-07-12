import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
`

const NavItem = styled.a`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  transition: 'color 0.2s ease-out';
  padding-left: 15px;
  padding-right: 15px;
  font-weight: ${props => (props.isActive ? '600' : '300')};
  color: ${props => (props.isActive ? '#3c4350' : 'gray')};
`

export default class Nav extends React.Component {
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

  setCurrentIndex = index => {
    this.setState({
      currentIndex: index,
    })
  }

  render() {
    const { items, currentIndex } = this.state
    return (
      <NavList>
        {items.map((item, index) => (
          <NavItem
            key={index}
            isActive={index === currentIndex}
            onClick={() => this.setCurrentIndex(index)}
          >
            {item}
          </NavItem>
        ))}
      </NavList>
    )
  }
}
