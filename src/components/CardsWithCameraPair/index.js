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
    title: 'חזיית המינימייזר',
    id: '16030',
    image:
      'https://fashion-media.apps-checkout.com/afrodita/16030_1525327134.jpg',
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'גוזייה מרופדת',
    id: '17010',
    image:
      'https://fashion-media.apps-checkout.com/afrodita/17010_1525327134.jpg',
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'אנדורה חזייה מרופדת',
    id: '98745',
    image:
      'https://fashion-media.apps-checkout.com/afrodita_98745-v-1509610422.jpg',
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'חליפת פנאי',
    id: '991526',
    image:
      'https://fashion-media.apps-checkout.com/afrodita/991526_1525327134.jpg',
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },

  {
    title: 'חליפת פנאי',
    id: '991527',
    image:
      'https://fashion-media.apps-checkout.com/afrodita/991527_1525327134.jpg',
    badge: 'trending',
    badgeTitle: 'Trending',
  },
  {
    title: 'חזיית פוש אפ',
    id: '03-12c347',
    image:
      'https://fashion-media.apps-checkout.com/afrodita_03-12c347_-v-1509610422.jpg',
    badge: 'trending',
    badgeTitle: 'Trending',
  },
  {
    title: 'בגד גוף',
    id: '09-12c541',
    image:
      'https://fashion-media.apps-checkout.com/afrodita_09-12c541-v-1509610422.jpg',
    badge: 'trending',
    badgeTitle: 'Trending',
  },
  {
    title: 'חולצת פלנל משובצת',
    id: '093a1205',
    image:
      'https://fashion-media.apps-checkout.com/afrodita_093a1205-v-1509610422.jpg',
    badge: 'trending',
    badgeTitle: 'Trending',
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
