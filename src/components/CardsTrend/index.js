import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import Card from './Card'
import Heading from '../Elements/Heading'

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
            <Heading>{this.props.title}</Heading>
          </Box>

          <Box width={[1 / 1, 1 / 1, 1 / 1]} px={2}>
            <Card
              title={this.props.product.title}
              id={this.props.product.id}
              imageSrc={this.props.product.image}
            />
          </Box>
        </Flex>
      </CardList>
    )
  }
}

CardsTrend.defaultProps = {}
CardsTrend.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  product: PropTypes.any,
}

export default CardsTrend
