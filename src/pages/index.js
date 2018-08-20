import React from 'react'
import Cards from '../components/Cards'
import TopNavBar from '../components/TopNavBar'
import BottomNavBar from '../components/BottonNavBar'
import { connect } from 'unistore/react'
import actions from '../store/actions'
import PageTransition from 'gatsby-plugin-page-transitions'
import get from 'lodash/get'

class FeedPage extends React.Component {
  componentDidMount() {
    this.props.setStoreName()
    this.props.setFeedPageData()
    window.onscroll = ev => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        this.props.buttonFeed === false
      ) {
        this.props.highLightButtonFeed()
      }
    }
  }
  render() {
    return (
      <PageTransition transitionTime={300} className="dsadsadas">
        <TopNavBar />
        {this.props.feedPageData !== null ? (
          <Cards products={this.props.feedPageData.products} />
        ) : null}
        {this.props.showBoarding ? (
          <BottomNavBar
            text="Let's go"
            buttonDisabled={this.props.showBoarding}
            location={this.props.location}
            buttonClick={this.props.hideBoarding}
          />
        ) : (
          <BottomNavBar
            text="Approve"
            buttonDisabled={this.props.buttonFeed}
            location={this.props.location}
          />
        )}
      </PageTransition>
    )
  }
}

const mapStateToProps = ({ buttonFeed, showBoarding, feedPageData }) => ({
  buttonFeed,
  showBoarding,
  feedPageData,
})
export default connect(
  mapStateToProps,
  actions
)(FeedPage)
