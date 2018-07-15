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

const data = [
  { title: 'Dress', id: '98797', image: image1, badge: 'bestSeller' },
  { title: 'Swimsuit', id: '98797', image: image2, badge: 'mostPopular' },
  { title: 'Red Dress', id: '98797', image: image3, badge: 'new' },
  { title: 'Blue Dress', id: '98797', image: image4, badge: 'onSale' },
  { title: 'White Dress', id: '98797', image: image5, badge: 'missing' },
  { title: 'Dress', id: '98797', image: image6, badge: 'mostPopular' },
  { title: 'Swimsuit', id: '98797', image: image7, badge: 'new' },
  { title: 'Red Dress', id: '98797', image: image2, badge: 'missing' },
]

const CardList = styled.div``

class Cards extends React.Component {
  state = {
    show: false,
  }

  render() {
    return (
      <CardList className="card-list">
        <Flex mx={-2} flexWrap="wrap">
          {data.map((item, index) => (
            <Box key={index} width={[1 / 2, 1 / 3, 1 / 4]} px={2}>
              <Card
                onClick={this.handleModal}
                key={index}
                title={item.title}
                id={item.id}
                imageSrc={item.image}
                badge={item.badge}
              />
            </Box>
          ))}
        </Flex>
      </CardList>
    )
  }
}

Cards.defaultProps = {}
Cards.propTypes = {
  src: PropTypes.string,
}

export default Cards
