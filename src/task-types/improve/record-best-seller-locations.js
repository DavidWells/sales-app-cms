import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link, { push } from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { siteMetadata } from '../../../gatsby-config'
import CardsImprove from '../../components/CardsImprove'
import BottomNavBar from '../../components/BottonNavBar'
import PageTransition from 'gatsby-plugin-page-transitions'

import { connect } from 'unistore/react'
import actions from '../../store/actions'

const data = [
  {
    title: 'Diamond Earrings 1/2 ct tw Round-cut 10K Yellow Gold',
    id: '182199101',
    image:
      'https://www.kay.com/images/products/1821/182199101_MV_ZM.jpg?resize=500:500',
    badge: 'new',
    badgeTitle: 'Earrings',
  },
  {
    title: 'Earring Climbers Natural Gemstones 10K White Gold',
    id: '375401902',
    image:
      'https://www.kay.com/images/products/3754/375401902_MV_ZM.jpg?resize=500:500',
    badge: 'new',
    badgeTitle: 'Earrings',
  },
  {
    title: 'Diamond Engagement Ring 1 ct tw Round-cut 14K Two-Tone Gold',
    id: '992662902',
    image:
      'https://www.kay.com/images/products/9926/992662902_MV_ZM.jpg?resize=500:500',
    badge: 'trending',
    badgeTitle: 'Engagement Rings',
  },
  {
    title: 'Diamond Engagement Ring 3/4 ct tw Princess/Round 14K White Gold',
    id: '992437400',
    image:
      'https://www.kay.com/images/products/9924/992437400_MV_ZM.jpg?resize=500:500',
    badge: 'trending',
    badgeTitle: 'Engagement Rings',
  },
]

class Improve extends Component {
  componentWillUnmount() {
    this.props.resetImproveSelectedItems()
  }

  updateTaskAndRedirect = () => {
    this.props.selectTasks(this.props.tasks, this.props.currentTaskView)
    push('/notifications')
  }
  render() {
    return (
      <PageTransition transitionTime={400}>
        <Helmet
          title={`Learn about your store’s highlight | ${get(
            siteMetadata,
            'title'
          )}`}
        />
        <CardsImprove data={data} title="Learn about your store’s highlight" />
        <BottomNavBar
          text="Done"
          buttonDisabled={this.props.improvePageSelectedItems > 0}
          buttonClick={() => this.updateTaskAndRedirect()}
          location={this.props.location}
          type="improve"
        />
      </PageTransition>
    )
  }
}

Improve.propTypes = {}

const mapStateToProps = ({
  improvePageSelectedItems,
  tasks,
  currentTaskView,
}) => ({
  improvePageSelectedItems,

  tasks,
  currentTaskView,
})
export default connect(
  mapStateToProps,
  actions
)(Improve)
