import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import Card from './Card'

import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'
import image5 from '../../assets/5.jpg'
import image6 from '../../assets/6.jpg'
import image7 from '../../assets/7.png'
import Heading from '../Elements/Heading'

const data = [
  {
    title: 'Dress',
    id: '98797',
    image: image1,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'Swimsuit',
    id: '98797',
    image: image2,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'Red Dress',
    id: '98797',
    image: image3,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'Blue Dress',
    id: '98797',
    image: image4,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'White Dress',
    id: '98797',
    image: image5,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'Dress',
    id: '98797',
    image: image6,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'Swimsuit',
    id: '98797',
    image: image7,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'Red Dress',
    id: '98797',
    image: image2,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
]

const CardList = styled.div``

const Text = styled.div`
  font-size: 30px;
  text-align: center;
`

class CardsWithCameraPair extends React.Component {
  state = {
    show: false,
  }

  render() {
    return (
      <CardList className="card-list">
        <Flex mx={-2} flexWrap="wrap">
          <Box p={2} width={[1 / 1]}>
            <Heading>People attend to buy both of those items together</Heading>
          </Box>
          {data.map((item, index) => (
            <Box key={index} width={[1 / 2, 1 / 2, 1 / 2]} px={2}>
              <Card
                key={index}
                title={item.title}
                id={item.id}
                imageSrc={item.image}
                badge={item.badge}
                badgeTitle={item.badgeTitle}
              />
            </Box>
          ))}
        </Flex>
      </CardList>
    )
  }
}

CardsWithCameraPair.defaultProps = {}
CardsWithCameraPair.propTypes = {
  src: PropTypes.string,
}

export default CardsWithCameraPair
