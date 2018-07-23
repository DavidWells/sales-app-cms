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
    title: 'חזייה מרופדת',
    id: '131343__6',
    image:
      'https://fashion-media.apps-checkout.com/afrodita_131343__6-v-1509610422.jpg',
    badge: 'new',
    badgeTitle: 'New',
  },
  {
    title: 'חזיית טי שירט',
    id: '13135T',
    image:
      'https://fashion-media.apps-checkout.com/afrodita/13135T_1525327134.jpg',
    badge: 'onSale',
    badgeTitle: 'On Sale',
  },

  {
    title: 'חזיית חצי קאפ',
    id: '13e330',
    image:
      'https://fashion-media.apps-checkout.com/afrodita_13e330-v-1509610422.jpg',
    badge: 'onSale',
    badgeTitle: 'On Sale',
  },
  {
    title: 'סלוגי',
    id: '27401T',
    image:
      'https://fashion-media.apps-checkout.com/afrodita/27401T_1525327134.jpg',
    badge: 'onSale',
    badgeTitle: 'On Sale',
  },
]

const CardList = styled.div``

const Text = styled.div`
  font-size: 30px;
  text-align: center;
`

class CardsWithCamera extends React.Component {
  state = {
    show: false,
    selected: {},
  }

  render() {
    return (
      <CardList className="card-list">
        <Flex mx={-2} flexWrap="wrap">
          <Box p={2} width={[1 / 1]}>
            <Heading>
              Set those items in visual
              <br />
              locations!
            </Heading>
          </Box>
          {data.map((item, index) => (
            <Box key={index} width={[1 / 2, 1 / 3, 1 / 4]} px={2}>
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

CardsWithCamera.defaultProps = {}
CardsWithCamera.propTypes = {
  src: PropTypes.string,
}

export default CardsWithCamera
