import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { sortBy } from 'lodash'
import { Flex, Box } from 'rebass'
import Card from './Card'
import { connect } from 'unistore/react'
import actions from '../../store/actions'

import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'
import image5 from '../../assets/5.jpg'
import image6 from '../../assets/6.jpg'
import image7 from '../../assets/7.png'

const data = [
  {
    title: 'Dress',
    id: '98797',
    image: image1,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'Dress',
    id: '98797',
    image: image1,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'Dress',
    id: '98797',
    image: image1,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'Dress',
    id: '98797',
    image: image1,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'Dress',
    id: '98797',
    image: image1,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'Swimsuit',
    id: '98797',
    image: image2,
    badge: 'mostPopular',
    badgeTitle: 'Most Popular',
  },
  {
    title: 'Red Dress',
    id: '98797',
    image: image3,
    badge: 'new',
    badgeTitle: 'New',
  },
  {
    title: 'Blue Dress',
    id: '98797',
    image: image4,
    badge: 'onSale',
    badgeTitle: 'On Sale',
  },
  {
    title: 'White Dress',
    id: '98797',
    image: image5,
    badge: 'missing',
    badgeTitle: 'Missing',
  },
  {
    title: 'Dress',
    id: '98797',
    image: image6,
    badge: 'mostPopular',
    badgeTitle: 'Most Popular',
  },
  {
    title: 'Swimsuit',
    id: '98797',
    image: image7,
    badge: 'new',
    badgeTitle: 'New',
  },
  {
    title: 'Red Dress',
    id: '98797',
    image: image2,
    badge: 'missing',
    badgeTitle: 'Missing',
  },
  {
    title: 'Dress',
    id: '98797',
    image: image1,
    badge: 'bestSeller',
    badgeTitle: 'Best Seller',
  },
  {
    title: 'Swimsuit',
    id: '98797',
    image: image2,
    badge: 'mostPopular',
    badgeTitle: 'Most Popular',
  },
  {
    title: 'Red Dress',
    id: '98797',
    image: image3,
    badge: 'new',
    badgeTitle: 'New',
  },
  {
    title: 'Blue Dress',
    id: '98797',
    image: image4,
    badge: 'onSale',
    badgeTitle: 'On Sale',
  },
  {
    title: 'White Dress',
    id: '98797',
    image: image5,
    badge: 'missing',
    badgeTitle: 'Missing',
  },
  {
    title: 'Dress',
    id: '98797',
    image: image6,
    badge: 'mostPopular',
    badgeTitle: 'Most Popular',
  },
  {
    title: 'Swimsuit',
    id: '98797',
    image: image7,
    badge: 'new',
    badgeTitle: 'New',
  },
  {
    title: 'Red Dress',
    id: '98797',
    image: image2,
    badge: 'missing',
    badgeTitle: 'Missing',
  },
]

const CardList = styled.div`
  padding-top: 80px;
`

class Cards extends React.Component {
  state = {
    show: false,
    data: sortBy(data, ['badge']),
  }

  async componentDidMount() {
    // const response = await fetch(
    //   `https://api.coinmarketcap.com/v1/ticker/?limit=10`
    // )
    // const json = await response.json()
    // console.log(json)
    this.props.addItems()
  }

  render() {
    return (
      <CardList className="card-list">
        <Flex mx={-2} flexWrap="wrap">
          {this.state.data.map((item, index) => (
            <Box
              id={item.title}
              key={index}
              width={[1 / 2, 1 / 3, 1 / 4]}
              px={2}
            >
              <Card
                onClick={this.handleModal}
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

Cards.defaultProps = {}
Cards.propTypes = {
  src: PropTypes.string,
}

const mapStateToProps = ({ modalOpen }) => ({
  modalOpen,
})
export default connect(
  mapStateToProps,
  actions
)(Cards)
