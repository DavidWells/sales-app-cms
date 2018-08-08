import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'unistore/react'
import actions from '../../store/actions'
import styled from 'styled-components'
import LineChart from '../Chart/LineChart'

import {
  Card as CustomCard,
  Subhead,
  BackgroundImage,
  Divider as BorderLine,
  Progress,
  Box,
  Text,
  Flex,
  Close,
  Badge,
} from 'rebass'

const CardWrapper = styled(CustomCard)`
  box-shadow: 0 10px 40px 0 rgba(18, 106, 211, 0.07),
    0 2px 9px 0 rgba(18, 106, 211, 0.06);
  cursor: pointer;
  position: relative;
`

const CardModal = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 250ms ease-in-out;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? '1' : '0')};

  @media (max-width: 700px) {
    background: rgba(0, 0, 0, 0.7);
  }
`

const CardModalInner = styled.div`
  background: white;
  max-width: 500px;
  position: relative;
  margin: 5rem auto;
  box-shadow: 0 25px 30px -18px rgba(0, 0, 0, 0.28);
  transition: all 350ms ease-in-out;
  transform: scale(${props => (props.show ? '1' : '0.2')});
  opacity: ${props => (props.show ? '1' : '0')};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  @media (max-width: 700px) {
    margin: 1rem;
  }
`

const CloseModal = styled(Close)`
  position: absolute;
  right: 0;
  /* background: gainsboro; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
  padding: 5px 15px;
  margin: 10px;
  cursor: pointer;
`

const ItemBadge = styled(Badge)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0;
  margin: 5px;
  padding: 5px 10px;
  background-color: ${props => props.theme.colors[props.badge]};
`

const CustomBorderLine = styled(BorderLine)`
  margin-top: 2px;
  margin-bottom: 12px;
`

const Title = styled(Subhead)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  min-height: 38px;
`

const percentageOf = (max, num) => {
  return Math.floor((num / max) * 100)
}

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      maxRank: 32,
    }
  }

  handleModal = event => {
    // console.log(event.pageX, event.pageY)
    this.setState(
      {
        modalOpen: !this.state.modalOpen,
      },
      () => {
        this.props.toggleModal()
      }
    )
  }

  openModal = e => {
    if (this.state.modalOpen === false) {
      this.setState(
        {
          modalOpen: true,
        },
        () => this.props.toggleModal()
      )
    } else {
      e.preventDefault()
    }
  }

  closeModal = e => {
    if (this.state.modalOpen === true) {
      this.setState(
        {
          modalOpen: false,
        },
        () => this.props.toggleModal()
      )
    } else {
      e.preventDefault()
    }
  }

  getCardPosition = id => {
    window.onscroll = ev => {
      // let rex = this.refs(id).getDOMNode()
      let el = document.getElementById(id)
      // let elPosition = el.getBoundingClientRect()
      if (el !== null) {
        let elPosition = el.getBoundingClientRect()
        // console.log(elPosition)
        // console.log(elPosition)
        if (elPosition.y > 400) {
          console.log(id + ' : its here')
        }
      }
    }
    console.log(this.props.badge)
  }

  componentDidMount() {
    window.addEventListener('scroll', e => {
      let el = document.getElementById(this.props.badge)
      if (el !== null) {
        let elPosition = el.getBoundingClientRect()
        if (this.props.badge === 'new') {
          // console.log(elPosition)
        }
        if (elPosition.y < 120 && elPosition.y > -390) {
          // console.log(this.props.badge + ' : its here')
          if (this.props.currentTopMenu !== this.props.badge) {
            this.props.setCurrentTopMenu(this.props.badge)
          }
        }
      }
    })
  }
  render() {
    return (
      <div>
        <CardWrapper mb={3} p={0}>
          <BackgroundImage
            ratio={1}
            src={this.props.imageSrc}
            onClick={this.openModal}
          />

          <ItemBadge badge={this.props.badge}>
            {this.props.badgeTitle}
          </ItemBadge>

          <Title
            px={2}
            py={1}
            fontSize={0}
            fontWeight={400}
            onClick={this.openModal}
          >
            {this.props.title}
          </Title>
          {/* <Subhead px={2} fontSize={0} fontWeight={400} color="gray">
          ID: {this.props.id}
        </Subhead> */}
          <CustomBorderLine mx={2} borderColor="lightGrey" borderBottom={1} />
          <Flex mx={2} pb={3} alignItems="center">
            <Text fontSize={0} pr={1}>
              {percentageOf(this.state.maxRank, this.props.rank)}%
            </Text>
            <Progress
              value={this.props.rank}
              max={this.state.maxRank}
              color="#3190f0"
              bg={'red'}
            />
            <Text fontSize={0} pl={1}>
              {this.props.rank}
            </Text>
          </Flex>
          <CardModal show={this.state.modalOpen} onClick={this.closeModal}>
            <CardModalInner show={this.state.modalOpen}>
              <CloseModal />
              <ItemBadge badge={this.props.badge}>
                {this.props.badgeTitle}
              </ItemBadge>

              <BackgroundImage ratio={1} src={this.props.imageSrc} />
              {/* <Subhead p={2} fontSize={1} fontWeight={400}>
              {this.props.title}
            </Subhead> */}
              <Subhead p={2} pt={3} fontSize={1} fontWeight={400} color="gray">
                ID: {this.props.id}
              </Subhead>
              <LineChart />
            </CardModalInner>
          </CardModal>
        </CardWrapper>
      </div>
    )
  }
}

Card.defaultProps = {
  title: 'default title',
  badge: 'bestSeller',
  badgeTitle: 'dsa',
}
Card.propTypes = {
  title: PropTypes.string,
  badge: PropTypes.oneOf([
    'bestSeller',
    'trending',
    'new',
    'onSale',
    'missing',
  ]),
  badgeTitle: PropTypes.string,
  id: PropTypes.any,
  imageSrc: PropTypes.string,
  progress: PropTypes.any,
  onClick: PropTypes.func,
}

const mapStateToProps = ({ modalOpen, currentTopMenu }) => ({
  modalOpen,
  currentTopMenu,
})
export default connect(
  mapStateToProps,
  actions
)(Card)
