import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import Card from './Card'
import Heading from '../Elements/Heading'

import image1 from '../../assets/1.jpg'

const data = [
  {
    title: 'kayjewelersIt’s #bracelet season! #StyleInspo',
    id: '16030',
    image:
      'https://instagram.fsdv2-1.fna.fbcdn.net/vp/8c54249b6f5b4e3c62d8ac8bd11026a5/5BEEC433/t51.2885-15/e15/36705295_253835758541822_1307095540449673216_n.jpg',
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
]

const CardList = styled.div``

const Text = styled.div`
  font-size: 30px;
  text-align: center;
`

class CardsTrend extends React.Component {
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

CardsTrend.defaultProps = {}
CardsTrend.propTypes = {
  src: PropTypes.string,
}

export default CardsTrend
