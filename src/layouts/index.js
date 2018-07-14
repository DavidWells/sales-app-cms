import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'
import emergence from 'emergence.js'
import { Provider, Heading, Container } from 'rebass'
import { connect } from 'unistore/react'
import { injectGlobal } from 'styled-components'
import 'normalize.css'
import BottomNavBar from '../components/BottonNavBar'

injectGlobal`
  * { box-sizing: border-box; }
  body {color: #3c3b3b; background: #f0f6ff;}
`

class Template extends React.Component {
  componentDidMount() {
    emergence.init()
    // this.props.incrementAsync()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { location, children } = this.props
    return (
      <Provider
        theme={{
          fonts: {
            sans: '"Source Sans Pro","Avenir Next", Helvetica, sans-serif',
          },
          fontSizes: [12, 16, 24, 32, 42, 52],
          colors: {
            black: '#3c3b3b',
            grey: 'grey',
            lightGrey: '#eaeaea',
          },
        }}
        className={this.props.rtl ? 'rtl' : 'ltr'}
      >
        <SiteNavi title={siteMetadata.title} {...this.props} />
        <Container className="wrapper" mt={4} pb={5}>
          {children()}
        </Container>
        <BottomNavBar />
      </Provider>
    )
  }
}

const mapStateToProps = ({ rtl, count }) => ({
  rtl,
  count,
})

export default connect(mapStateToProps)(Template)
