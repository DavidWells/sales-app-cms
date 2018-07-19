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

const CardWrapper = styled(CustomCard)`
  box-shadow: 0 10px 40px 0 rgba(18, 106, 211, 0.07),
    0 2px 9px 0 rgba(18, 106, 211, 0.06);

  position: relative;
`

const ItemBadge = styled(Badge)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0;
  margin: 8px;
  padding: 5px 10px;
  background-color: white;
`

const CheckBox = styled(Box)`
  border: 1px solid #8e8e8e;
  cursor: pointer;
  padding: 3px 7px 3px 7px;
  width: 28px;
  height: 26px;
  position: relative;
  z-index: 4;
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
  width: 55px;
  height: 35px;
  display: flex;
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
    this.setState({
      selected: !this.state.selected,
    })
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
      <CardWrapper mb={3} p={0}>
        <BackgroundImage ratio={1} src={this.state.currentImage} />
        <ItemBadge bg="red">
          <img width="60" src={instagramLogo} />
        </ItemBadge>
        <BorderLine mx={2} borderColor="lightGrey" borderBottom={1} />
        <Flex justifyContent="center" alignItems="center">
          <Box p={2} mx={2}>
            <InputCamera
              type="file"
              accept="image/*"
              onChange={this.getImage}
            />
            <CameraIcon src={cameraIcon} width="30" height="30" />
          </Box>
          <CheckBox m={2} onClick={this.toggleSelection}>
            {this.state.selected && (
              <img src={checkIcon} width="14" height="14" alt="" />
            )}
          </CheckBox>
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

export default Card
