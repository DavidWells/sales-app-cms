import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Flex,
  Box,
  Card as PairCard,
  Divider as BorderLine,
  Image,
} from 'rebass'
import { connect } from 'unistore/react'
import actions from '../../store/actions'
import Card from './Card'
import Row from './Row'
import Heading from '../Elements/Heading'
import cameraIcon from '../../assets/camera.svg'
import checkIcon from '../../assets/check.svg'

const data = [
  [
    {
      title: 'Earring Climbers Natural Gemstones 10K White Gold',
      id: '375401902',
      image:
        'https://www.kay.com/images/products/3754/375401902_MV_ZM.jpg?resize=500:500',
      badge: 'new',
      badgeTitle: 'Earrings',
    },
    {
      title: 'Dangle Earrings 10K Yellow Gold',
      id: '393435300',
      image:
        'https://www.kay.com/images/products/3934/393435300_MV_ZM.jpg?resize=500:500',
      badge: 'new',
      badgeTitle: 'Earrings',
    },
  ],
  [
    {
      title: 'Cat Charm Black Crystals & Enamel Sterling Silver',
      id: '505495301',
      image:
        'https://www.kay.com/images/products/5054/505495301_MV_ZM.jpg?resize=500:500',
      badge: 'missing',
      badgeTitle: 'On Sale',
    },

    {
      title: 'Blue & White Diamonds 1/10 ct tw 10K Rose Gold Crown Ring',
      id: '23557109',
      image:
        'https://www.kay.com/images/products/0235/023557109_MV_ZM.jpg?resize=500:500',
      badge: 'missing',
      badgeTitle: 'On Sale',
    },
  ],
]

const CardWrapper = styled(PairCard)`
  box-shadow: none;
  position: relative;
  ${props => props.selected && 'border: 2px solid rgba(0, 184, 148, 0.72);'};
`

const CardList = styled.div``

const Text = styled.div`
  font-size: 30px;
  text-align: center;
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

class CardsPair extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImage: this.props.imageSrc,
      selected: false,
      show: false,
    }
  }

  render() {
    return (
      <CardList className="card-list">
        <Flex mx={-2} flexWrap="wrap">
          <Box p={2} width={[1 / 1]}>
            <Heading>People attend to buy both of those items together</Heading>
          </Box>
          {data.map((row, index) => <Row row={row} key={index} />)}
        </Flex>
      </CardList>
    )
  }
}

CardsPair.defaultProps = {}
CardsPair.propTypes = {
  src: PropTypes.string,
}

const mapStateToProps = ({ pairPageSelectedItems }) => ({
  pairPageSelectedItems,
})
export default connect(
  mapStateToProps,
  actions
)(CardsPair)
