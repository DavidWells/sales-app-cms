import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'unistore/react'
import actions from '../../store/actions'

import {
  Card as CustomCard,
  Subhead,
  BackgroundImage,
  Box,
  Text,
  Divider as BorderLine,
  Flex,
  Badge,
} from 'rebass'

import { resetOrientation } from '../../utils'

import cameraIcon from '../../assets/camera.svg'
import checkIcon from '../../assets/check.svg'

const CardWrapper = styled(CustomCard)`
  box-shadow: 0 10px 40px 0 rgba(18, 106, 211, 0.07),
    0 2px 9px 0 rgba(18, 106, 211, 0.06);

  position: relative;
  ${props => props.selected && 'border: 2px solid rgba(0, 184, 148, 0.72);'};
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
const CameraIcon = styled.img`
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`

const InputCamera = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  left: 0;
  right: 0;
  width: 55px;
  height: 35px;
  display: flex;
  justify-content: center;
  margin: auto;
`

const Check = styled.img`
  max-width: 20px;
  position: absolute;
  right: 0;
  margin-right: 20px;
`

const CustomBorderLine = styled(BorderLine)`
  margin-top: 2px;
  margin-bottom: 3px;
`

const Title = styled(Subhead)`
  /* display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  min-height: 38px; */
`

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImage: this.props.imageSrc,
      selected: false,
    }
  }

  toggleSelection = e => {
    this.setState(
      {
        selected: !this.state.selected,
      },
      () => {
        if (this.state.selected) {
          this.props.incremenImproveSelectedItems()
        } else {
          this.props.decrementImproveSelectedItems()
        }
      }
    )
  }

  getImage = e => {
    e.preventDefault()
    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = e => {
      resetOrientation(e.target.result, 5, image => {
        this.setState({
          file: file,
          currentImage: image,
        })
      })
    }
    reader.readAsDataURL(file)
    this.setState({ selected: true })
  }

  render() {
    return (
      <CardWrapper mb={3} p={0} selected={this.state.selected}>
        <BackgroundImage
          ratio={1}
          src={this.state.currentImage}
          onClick={this.toggleSelection}
        />
        <ItemBadge badge={this.props.badge}>{this.props.badgeTitle}</ItemBadge>

        <Title px={2} pt={1} pb={1} fontSize={0} fontWeight={400} color="gray">
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
