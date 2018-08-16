import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { get, isEmpty, has } from 'lodash'
import { Flex, Box, Text, Subhead } from 'rebass'
import Card from './Card'
import Heading from '../Elements/Heading'
import { connect } from 'unistore/react'
import actions from '../../store/actions'
// import Img from 'react-image'
import BackgroundImage from 'react-background-image-loader'

import ImagePlaceholder from '../../assets/placeholder.png'

const CardList = styled.div`
  padding-top: 45px;
`

const HeadText = styled(Text)`
  font-family: 'Montserrat', 'Source Sans Pro', sans-serif;
`

const Image = styled(BackgroundImage)`
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center center;
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
        <Flex mx={-2} flexWrap="wrap">
          {this.props.products.map((item, index) => (
            <Box
              id={item.badge}
              ref={item.badge}
              key={index}
              width={[1 / 2, 1 / 2, 1 / 2, 1 / 2, 1 / 2, 1 / 4]}
              px={2}
            >
              <Card
                ref={item.id}
                onClick={this.handleModal}
                key={index}
                title={item.title}
                id={item.id}
                rank={item.rank}
                imageSrc={
                  has(item, 'imageUrl')
                    ? item.imageUrl.length > 0
                      ? item.imageUrl
                      : item.image
                    : item.image
                }
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

Cards.propTypes = {
  src: PropTypes.string,
  products: PropTypes.array.isRequired,
}

const mapStateToProps = ({ modalOpen, buttonFeed }) => ({
  modalOpen,
  buttonFeed,
})
export default connect(
  mapStateToProps,
  actions
)(Cards)
