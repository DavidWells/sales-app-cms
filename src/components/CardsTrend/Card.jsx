import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
import cameraIcon from '../../assets/camera.svg'
import checkIcon from '../../assets/check.svg'
import instagramLogo from '../../assets/instagram-logo.svg'

import { connect } from 'unistore/react'
import actions from '../../store/actions'

const CardWrapper = styled(CustomCard)`
  box-shadow: 0 10px 40px 0 rgba(18, 106, 211, 0.07),
    0 2px 9px 0 rgba(18, 106, 211, 0.06);
  max-width: 550px;
  margin: auto;
  margin-bottom: 20px;
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
  background-color: white;
`

const CameraIcon = styled.img`
  cursor: pointer;
  transition: all 300ms ease-in-out;
  display: flex;
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
  margin-top: 5px;
  margin-bottom: 3px;
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
        this.props.toggleTrendItem()
      }
    )
  }

  getImage = e => {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]
    console.log(e.target.value)
    reader.onloadend = () => {
      this.setState(
        {
          // file: file,
          currentImage: reader.result,
        },
        () => {
          this.setState({ selected: true })
        }
      )
    }
    reader.readAsDataURL(file)
  }

  render() {
    return (
      <CardWrapper mb={3} p={0} selected={this.state.selected}>
        <BackgroundImage
          ratio={1}
          src={this.state.currentImage}
          onClick={this.toggleSelection}
        />
        <ItemBadge bg="red">
          <img width="60" src={instagramLogo} />
        </ItemBadge>
        <Subhead
          px={2}
          pt={2}
          pb={1}
          fontSize={0}
          fontWeight={400}
          color="gray"
        >
          ID: {this.props.id}
        </Subhead>
        <CustomBorderLine mx={2} borderColor="lightGrey" borderBottom={1} />
        <Flex justifyContent="center" alignItems="center">
          <Box p={2} mx={2}>
            <InputCamera
              type="file"
              accept="image/*"
              onChange={this.getImage}
            />
            <CameraIcon src={cameraIcon} width="30" height="30" />
          </Box>
          {this.state.selected && <Check src={checkIcon} />}
        </Flex>
      </CardWrapper>
    )
  }
}

Card.defaultProps = {
  title: 'default title',
}
Card.propTypes = {
  title: PropTypes.string,
  badge: PropTypes.any,
  id: PropTypes.any,
  imageSrc: PropTypes.string,
  progress: PropTypes.any,
  onClick: PropTypes.func,
}

const mapStateToProps = ({ trendItemSelected }) => ({
  trendItemSelected,
})

export default connect(
  mapStateToProps,
  actions
)(Card)
