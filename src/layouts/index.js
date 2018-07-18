import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'
import emergence from 'emergence.js'
import { Provider, Heading, Container } from 'rebass'
import { Provider as ReduxProvider } from 'unistore/react'
import { connect } from 'unistore/react'
import { injectGlobal } from 'styled-components'
import 'normalize.css'
import BottomNavBar from '../components/BottonNavBar'

import store from '../store/createStore'

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
      <ReduxProvider store={store}>
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
              // bestSeller: '#00b894',
              bestSeller: 'rgba(0, 184, 148, 0.7)',
              // trending: '#0984e3',
              trending: 'rgba(9, 132, 227, 0.7)',
              // new: '#e84393',
              new: 'rgba(232, 67, 147, 0.68)',
              // onSale: '#d63031',
              onSale: 'rgba(214, 48, 49, 0.7)',
              missing: 'rgba(0, 0, 0, 0.5)',
            },
          }}
          className={this.props.rtl ? 'rtl' : 'ltr'}
        >
          <SiteNavi title={siteMetadata.title} {...this.props} />

          <Container className="wrapper" mt={4} pb={5} pt={4}>
            {children()}
          </Container>
          <BottomNavBar />
        </Provider>
      </ReduxProvider>
    )
  }
}

const mapStateToProps = ({ rtl, count }) => ({
  rtl,
  count,
})

export default connect(mapStateToProps)(Template)
