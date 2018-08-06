import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { get } from 'lodash'
import { Flex, Box, Text, Subhead } from 'rebass'
import Card from './Card'
import Heading from '../Elements/Heading'
import { connect } from 'unistore/react'
import actions from '../../store/actions'

const CardList = styled.div`
  padding-top: 45px;
`

const HeadText = styled(Text)`
  font-family: 'Montserrat', 'Source Sans Pro', sans-serif;
`

class Cards extends React.Component {
  state = {
    show: false,
    // data: sortBy(this.props.items, ['badge']),
    data: this.props.items,
  }

  // componentDidMount() {
  //   window.onscroll = ev => {}
  // }

  getCardPosition = visible => {
    // window.onscroll = ev => {
    //   // let rex = this.refs(id).getDOMNode()
    //   let el = document.getElementById(id)
    //   // let elPosition = el.getBoundingClientRect()
    //   if (el !== null) {
    //     let elPosition = el.getBoundingClientRect()
    //     // console.log(elPosition)
    //     console.log(id)
    //   }
    // }
    console.log(visible)
  }

  render() {
    return (
      <CardList className="card-list">
        {/* <Heading px={2} pt={1} pb={3}>
          Learn about your stores highlight!
        </Heading> */}
        <Flex mx={-2} flexWrap="wrap">
          {this.props.products.map((item, index) => (
            <Box
              id={item.badge}
              ref={item.badge}
              key={index}
              width={[1 / 2, 1 / 2, 1 / 2, 1 / 2, 1 / 2, 1 / 6]}
              px={2}
            >
              <Card
                ref={item.id}
                onClick={this.handleModal}
                key={index}
                title={item.title}
                id={item.id}
                imageSrc={get(item, 'imageUrl', 'image')}
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
  products: PropTypes.array.isRequired,
}

const mapStateToProps = ({ modalOpen, items, buttonFeed, itemCategories }) => ({
  modalOpen,
  items,
  buttonFeed,
  itemCategories,
})
export default connect(
  mapStateToProps,
  actions
)(Cards)
