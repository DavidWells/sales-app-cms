import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'unistore/react'
import actions from '../../store/actions'
import LineChart from '../Chart/LineChart'
import {
  Card as CustomCard,
  Subhead,
  BackgroundImage,
  Box,
  Text,
  Divider as BorderLine,
  Flex,
  Badge,
  Close,
} from 'rebass'

const CardWrapper = styled(CustomCard)`
  box-shadow: 0 10px 40px 0 rgba(18, 106, 211, 0.07),
    0 2px 9px 0 rgba(18, 106, 211, 0.06);

  position: relative;
  ${props => props.selected && 'border: 2px solid rgba(0, 184, 148, 0.72);'};
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
  margin-bottom: 3px;
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

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImage: this.props.imageSrc,
      selected: false,
      modalOpen: false,
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

  render() {
    return (
      <CardWrapper mb={3} p={0} selected={this.state.selected}>
        <BackgroundImage
          ratio={1}
          src={this.state.currentImage}
          onClick={this.openModal}
        />
        <ItemBadge badge={this.props.badge}>{this.props.badgeTitle}</ItemBadge>

        <Title
          px={2}
          py={1}
          fontSize={0}
          fontWeight={400}
          onClick={this.openModal}
        >
          {this.props.title}
        </Title>
        <Text px={2} fontSize={0} fontWeight="bold" mb={1}>
          New location
        </Text>
        <CustomBorderLine mx={2} borderColor="lightGrey" borderBottom={1} />

        <Flex flexWrap="wrap" px={2} pb={2} justifyContent="space-between">
          <Text fontSize={0}> Change:</Text>
          <Text
            color={this.props.units >= 0 ? 'greenButton' : 'red'}
            fontSize={0}
            fontWeight="bold"
          >
            {this.props.units} units
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
    )
  }
}

Card.defaultProps = {
  title: 'default title',
  badge: 'bestSeller',
  badgeTitle: 'trending',
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
  units: PropTypes.number,
  imageSrc: PropTypes.string,
  progress: PropTypes.any,
  onClick: PropTypes.func,
}

const mapStateToProps = ({ buttonImprove, improvePageSelectedItems }) => ({
  buttonImprove,
  improvePageSelectedItems,
})

export default connect(
  mapStateToProps,
  actions
)(Card)
