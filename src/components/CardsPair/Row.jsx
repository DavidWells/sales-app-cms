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
import Card from './Card'
import cameraIcon from '../../assets/camera.svg'
import checkIcon from '../../assets/check.svg'
import { get, has } from 'lodash'

const CardWrapper = styled(CustomCard)`
  box-shadow: none;
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

const PairCardOverlayImage = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
`

class Row extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImage: null,
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
          this.props.incremenPairSelectedItems()
        } else {
          this.props.decrementPairSelectedItems()
        }
      }
    )
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
    this.setState({ selected: true }, () => {
      if (this.state.selected) {
        this.props.incremenPairSelectedItems()
      } else {
        this.props.decrementPairSelectedItems()
      }
    })
  }

  render() {
    return (
      <Box className="pair-row" width={[1 / 1]} mb={3}>
        <CardWrapper
          className="pair-card"
          selected={this.state.selected}
          onClick={this.toggleSelection}
        >
          {this.state.currentImage !== null && (
            <PairCardOverlayImage src={this.state.currentImage} />
          )}

          <Flex flexWrap="wrap">
            {this.props.row.map((item, index) => (
              <Box key={index} width={[1 / 2, 1 / 2, 1 / 2]} px={2}>
                <Card
                  key={index}
                  title={item.title}
                  id={item.id}
                  imageSrc={
                    has(item, 'imageUrl')
                      ? item.imageUrl.length > 0
                        ? item.imageUrl
                        : item.image
                      : item.image
                  }
                  badge={item.badge}
                  badgeTitle={item.badgeTitle}
                />
              </Box>
            ))}
          </Flex>

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
      </Box>
    )
  }
}

Row.propTypes = {
  row: PropTypes.any,
}

const mapStateToProps = ({ pairPageSelectedItems }) => ({
  pairPageSelectedItems,
})

export default connect(
  mapStateToProps,
  actions
)(Row)
