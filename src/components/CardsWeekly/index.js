import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box, Text } from 'rebass'
import Card from './Card'
import Heading from '../Elements/Heading'
import { get } from 'lodash'

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
          {this.props.data.products.map((item, index) => (
            <Box
              key={index}
              width={[1 / 2, 1 / 2, 1 / 2, 1 / 2, 1 / 2, 1 / 4]}
              px={2}
            >
              <Card
                key={index}
                title={item.title}
                id={item.id}
                units={parseInt(item.units)}
                imageSrc={get(item, 'imageUrl', item.image)}
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
