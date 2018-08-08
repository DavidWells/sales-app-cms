import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import Card from './Card'
import Heading from '../Elements/Heading'
import { get, has } from 'lodash'

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
    console.log(this.props.product)
    return (
      <CardList className="card-list">
        <Flex mx={-2} flexWrap="wrap">
          <Box p={2} width={[1 / 1]}>
            <Heading>{this.props.title}</Heading>
          </Box>

          {this.props.product !== null && (
            <Box width={[1 / 1, 1 / 1, 1 / 1]} px={2}>
              <Card
                title={this.props.product.title}
                id={this.props.product.id}
                imageSrc={
                  has(this.props.product, 'imageUrl')
                    ? this.props.product.imageUrl.length > 0
                      ? this.props.product.imageUrl
                      : this.props.product.image
                    : this.props.product.image
                }
              />
            </Box>
          )}
        </Flex>
      </CardList>
    )
  }
}

CardsTrend.defaultProps = {
  product: null,
}
CardsTrend.propTypes = {
  src: PropTypes.string,
  title: PropTypes.any,
  product: PropTypes.any,
  id: PropTypes.any,
}

export default CardsTrend
