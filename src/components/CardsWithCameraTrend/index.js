import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import Card from './Card'
import Heading from '../Elements/Heading'

import image1 from '../../assets/1.jpg'

const data = [
  {
    title: 'חזיית המינימייזר',
    id: '16030',
    image:
      'https://fashion-media.apps-checkout.com/afrodita/16030_1525327134.jpg',
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
]

const CardList = styled.div``

const Text = styled.div`
  font-size: 30px;
  text-align: center;
`

class CardsWithCameraTrend extends React.Component {
  state = {
    show: false,
  }

  render() {
    return (
      <CardList className="card-list">
        <Flex mx={-2} flexWrap="wrap">
          <Box p={2} width={[1 / 1]}>
            <Heading>
              People might search for
              <br />
              this look today!
            </Heading>
          </Box>

          {data.map((item, index) => (
            <Box key={index} width={[1 / 1, 1 / 1, 1 / 1]} px={2}>
              <Card
                onClick={this.handleModal}
                key={index}
                title={item.title}
                id={item.id}
                imageSrc={item.image}
              />
            </Box>
          ))}
        </Flex>
      </CardList>
    )
  }
}

CardsWithCameraTrend.defaultProps = {}
CardsWithCameraTrend.propTypes = {
  src: PropTypes.string,
}

export default CardsWithCameraTrend
