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
      title: 'קרם פנים חמאת שיאה לייט',
      id: '121',
      image:
        'https://img.loccitane.com/P.aspx?l=he-IL&s=500&e=png&name=%D7%A7%D7%A8%D7%9D-%D7%A4%D7%A0%D7%99%D7%9D-%D7%97%D7%9E%D7%90%D7%AA-%D7%A9%D7%99%D7%90%D7%94-%D7%9C%D7%99%D7%99%D7%98&id=01CL050K15_2&v=2&nodef=true',
      badge: 'bestSeller',
      badgeTitle: 'Best Seller',
    },
    {
      title: 'סרום לפנים REINE BLANCHE',
      id: '393435300',
      image:
        'https://img.loccitane.com/P.aspx?l=he-IL&s=500&e=png&name=l%27occitane-%D7%A1%D7%A8%D7%95%D7%9D-%D7%9C%D7%A4%D7%A0%D7%99%D7%9D-reine-blanche&id=38WS030A18&v=2',
      badge: 'new',
      badgeTitle: 'New',
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
            <Heading>{this.props.title}</Heading>
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
  title: PropTypes.string,
}

const mapStateToProps = ({ pairPageSelectedItems }) => ({
  pairPageSelectedItems,
})
export default connect(
  mapStateToProps,
  actions
)(CardsPair)
