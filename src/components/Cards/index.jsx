import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import Card from './Card'

const data = [
  { title: 'Title one', id: '98797' },
  { title: 'title two', id: '98797' },
  { title: 'title fd', id: '98797' },
  { title: 'title vfv', id: '98797' },
  { title: 'title sds', id: '98797' },
]

const CardList = styled.div``

const Cards = props => {
  return (
    <CardList className="card-list">
      <Flex mx={-2} flexWrap="wrap">
        {data.map((item, index) => (
          <Box key={index} width={[1 / 2, 1 / 3, 1 / 4]} px={2}>
            <Card key={index} title={item.title} id={item.id} />
          </Box>
        ))}
      </Flex>
    </CardList>
  )
}

Cards.defaultProps = {}
Cards.propTypes = {
  src: PropTypes.string,
}

export default Cards
