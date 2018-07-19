import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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
import cameraIcon from '../../assets/camera.svg'
import checkIcon from '../../assets/check.svg'

const CardWrapper = styled(CustomCard)`
  box-shadow: 0 10px 40px 0 rgba(18, 106, 211, 0.07),
    0 2px 9px 0 rgba(18, 106, 211, 0.06);

  position: relative;
  ${props => props.selected && ' border: 1px solid rgba(0, 184, 148, 0.4)'};
`

const ItemBadge = styled(Badge)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0;
  margin: 10px;
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
      this.setState({
        file: file,
        currentImage: reader.result,
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

        <Subhead
          px={2}
          pt={1}
          pb={1}
          fontSize={0}
          fontWeight={400}
          color="gray"
        >
          ID: {this.props.id}
        </Subhead>
        <CustomBorderLine mx={2} borderColor="lightGrey" borderBottom={1} />
        <Flex justifyContent="center" alignItems="center">
          <Box p={2}>
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
  imageSrc: PropTypes.string,
  progress: PropTypes.any,
  onClick: PropTypes.func,
}

export default Card
