import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box, Text } from 'rebass'
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
    title: 'Diamond Engagement Ring 1 ct tw Round-cut 14K Two-Tone Gold',
    id: '992662902',
    image:
      'https://www.kay.com/images/products/9926/992662902_MV_ZM.jpg?resize=500:500',
    badge: 'trending',
    badgeTitle: 'Engagement Rings',
    units: -2,
  },
  {
    title: 'Diamond Engagement Ring 3/4 ct tw Princess/Round 14K White Gold',
    id: '992437400',
    image:
      'https://www.kay.com/images/products/9924/992437400_MV_ZM.jpg?resize=500:500',
    badge: 'trending',
    badgeTitle: 'Engagement Rings',
    units: 3,
  },
  {
    title: 'Diamond Earrings 1/2 ct tw Round-cut 10K Yellow Gold',
    id: '182199101',
    image:
      'https://www.kay.com/images/products/1821/182199101_MV_ZM.jpg?resize=500:500',
    badge: 'new',
    badgeTitle: 'Earrings',
    units: -1,
  },
  {
    title: 'Earring Climbers Natural Gemstones 10K White Gold',
    id: '375401902',
    image:
      'https://www.kay.com/images/products/3754/375401902_MV_ZM.jpg?resize=500:500',
    badge: 'new',
    badgeTitle: 'Earrings',
    units: 6,
  },
]

const CardList = styled.div``

class CardsWeekly extends React.Component {
  state = {
    show: false,
    selected: {},
  }

  render() {
    return (
      <CardList className="card-list">
        <Flex mx={-2} flexWrap="wrap">
          <Box p={2} width={[1 / 1]}>
            <Heading mb={2}>Your last week results</Heading>
            <Text textAlign="center" mb={2}>
              1/8/2018 - 6/8/2018
            </Text>
          </Box>
          {data.map((item, index) => (
            <Box
              key={index}
              width={[1 / 2, 1 / 2, 1 / 2, 1 / 2, 1 / 2, 1 / 6]}
              px={2}
            >
              <Card
                key={index}
                title={item.title}
                id={item.id}
                units={item.units}
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

CardsWeekly.defaultProps = {}
CardsWeekly.propTypes = {
  src: PropTypes.string,
}

export default CardsWeekly
