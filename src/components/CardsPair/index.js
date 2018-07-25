import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import Card from './Card'

// import image1 from '../../assets/1.jpg'
// import image2 from '../../assets/2.jpg'
// import image3 from '../../assets/3.jpg'
// import image4 from '../../assets/4.jpg'
// import image5 from '../../assets/5.jpg'
// import image6 from '../../assets/6.jpg'
// import image7 from '../../assets/7.png'
import Heading from '../Elements/Heading'

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

const CardList = styled.div``

const Text = styled.div`
  font-size: 30px;
  text-align: center;
`

class CardsPair extends React.Component {
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
          {data.map((row, index) => (
            <Box width={[1 / 1]} key={index}>
              <Flex flexWrap="wrap">
                {row.map((item, index) => (
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
            </Box>
          ))}
        </Flex>
      </CardList>
    )
  }
}

CardsPair.defaultProps = {}
CardsPair.propTypes = {
  src: PropTypes.string,
}

export default CardsPair
