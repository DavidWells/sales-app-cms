import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'
import emergence from 'emergence.js'
import { Provider, Heading, Container } from 'rebass'
import { connect } from 'unistore/react'
import { injectGlobal } from 'styled-components'
import 'normalize.css'

injectGlobal`
  * { box-sizing: border-box; }
  body {color: #3c3b3b;}
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
            gradient:
              'linear-gradient(135deg,#736cc7 21%,#3190f0 100%,#3190f0 100%)',
          },
        }}
        className={this.props.rtl ? 'rtl' : 'ltr'}
      >
        <SiteNavi title={siteMetadata.title} {...this.props} />
        <Container className="wrapper" mt={4}>
          <button onClick={this.props.increment}>click here</button>

          {children()}
        </Container>
      </Provider>
    )
  }
}

const mapStateToProps = ({ rtl, count }) => ({
  rtl,
  count,
})

let actions = store => ({
  // Actions can just return a state update:
  increment(state) {
    return { count: state.count + 1 }
  },

  // The above example as an Arrow Function:
  increment2: ({ count }) => ({ count: count + 1 }),

  //Actions receive current state as first parameter and any other params next
  //check this function as <button onClick={incrementAndLog}>
  incrementAndLog: ({ count }, event) => {
    console.info(event)
    return { count: count + 1 }
  },

  // Async actions can be pure async/promise functions:
  async getStuff(state) {
    let res = await fetch('/foo.json')
    return { stuff: await res.json() }
  },

  // ... or just actions that call store.setState() later:
  incrementAsync(state) {
    setTimeout(() => {
      store.setState({ count: state.count + 1 })
    }, 100)
  },
})

export default connect(
  mapStateToProps,
  actions
)(Template)
