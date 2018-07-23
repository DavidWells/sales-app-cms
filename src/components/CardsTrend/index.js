import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import Card from './Card'
import Heading from '../Elements/Heading'

import image1 from '../../assets/1.jpg'

const data = [{ title: 'Dress', id: '98797', image: image1 }]

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
