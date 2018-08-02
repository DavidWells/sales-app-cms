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
    window.onscroll = ev => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.props.highLightButtonFeed()
      }
    }
  }
  render() {
    const { edges: feedPageObject } = this.props.data.allMarkdownRemark

    const products = feedPageObject[0].node.frontmatter.feedPage.products
    console.log(products)

    return (
      <PageTransition transitionTime={300} className="dsadsadas">
        <TopNavBar />
        <Cards products={products} />
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

const mapStateToProps = ({ buttonFeed, showBoarding }) => ({
  buttonFeed,
  showBoarding,
})
export default connect(
  mapStateToProps,
  actions
)(FeedPage)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "Kay" } } }) {
      edges {
        node {
          frontmatter {
            title
            logo
            feedPage {
              products {
                id
                title
                image
                badge
                badgeTitle
              }
            }
          }
        }
      }
    }
  }
`
