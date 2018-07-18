import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { sortBy } from 'lodash'
import { Flex, Box } from 'rebass'
import Card from './Card'
import { connect } from 'unistore/react'
import actions from '../../store/actions'

const CardList = styled.div`
  padding-top: 80px;
`

class Cards extends React.Component {
  state = {
    show: false,
    // data: sortBy(this.props.items, ['badge']),
    data: this.props.items,
  }

  componentDidMount() {
    // this.props.addItems()
  }

  render() {
    return (
      <CardList className="card-list">
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

const mapStateToProps = ({ modalOpen, items }) => ({
  modalOpen,
  items,
})
export default connect(
  mapStateToProps,
  actions
)(Cards)
