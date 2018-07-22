import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { sortBy } from 'lodash'
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

  componentDidMount() {}

  render() {
    return (
      <CardList className="card-list">
        <Heading px={2} pt={1} pb={3}>
          Learn about your stores highlight!
        </Heading>
        <Flex mx={-2} flexWrap="wrap">
          {this.state.data.map((item, index) => (
            <Box
              id={item.badge}
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

const mapStateToProps = ({ modalOpen, items, buttonFeed }) => ({
  modalOpen,
  items,
  buttonFeed,
})
export default connect(
  mapStateToProps,
  actions
)(Cards)
