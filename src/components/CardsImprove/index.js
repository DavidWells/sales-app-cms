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
            <Heading>{this.props.title}</Heading>
          </Box>
          {this.props.data &&
            this.props.data.map((item, index) => (
              <Box
                key={index}
                width={[1 / 2, 1 / 2, 1 / 2, 1 / 2, 1 / 2, 1 / 6]}
                px={2}
              >
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

CardsWithCamera.defaultProps = {
  title: 'Take a photo of these items new location',
}
CardsWithCamera.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.any,
}

export default CardsWithCamera
