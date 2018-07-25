import React from 'react'
//import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'
// import emergence from 'emergence.js'
import { Provider, Container } from 'rebass'
import StoreProvider from './StoreProvider'
import { connect } from 'unistore/react'
import { injectGlobal } from 'styled-components'
import 'normalize.css'

// import store from '../store/createStore'
// import actions from '../store/actions'
import Boarding from '../components/Boarding'

injectGlobal`
  * { box-sizing: border-box; }
  body {color: #3c3b3b; background: #f0f6ff;}
  .no-scroll {overflow: hidden; position: fixed;}
  .disable-clicks {pointer-events: none;}
`

class Template extends React.Component {
  state = {
    entered: false,
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.pathname !== '/' &&
      this.props.showBoarding === true
    ) {
      // this.props.hideBoarding()
    }
  }

  componentDidMount() {
    if (
      this.props.location.pathname !== '/' &&
      this.props.showBoarding === true
    ) {
      // this.props.hideBoarding()
    }
  }

  render() {
    const { location, children } = this.props
    return (
      <StoreProvider>
        <Provider
          theme={{
            fonts: {
              sans:
                '"Source Sans Pro","Rubik","Avenir Next", Helvetica, sans-serif',
              heading: '"Montserrat", "Source Sans Pro", sans-serif;',
            },
            breakpoints: [320, 480, 768, 992, 1024],
            fontSizes: [12, 16, 20, 24, 32, 42, 52],
            colors: {
              black: '#3c3b3b',
              grey: 'grey',
              lightGrey: '#eaeaea',
              // bestSeller: '#00b894',
              bestSeller: 'rgba(61, 193, 211, 0.7)',
              // trending: '#0984e3',
              trending: 'rgba(9, 132, 227, 0.7)',
              // new: '#e84393',
              new: 'rgba(232, 67, 147, 0.68)',
              // onSale: '#d63031',
              onSale: 'rgba(214, 48, 49, 0.7)',
              missing: 'rgba(0, 0, 0, 0.5)',
              pair: '#9B59B6',
              instagram: 'grey',
              greenButton: '#00b894',
              disabledButton: 'red',
            },
          }}
          className={` ${this.props.rtl ? 'rtl' : 'ltr'} ${
            this.props.showBoarding ? 'disable-clicks' : 'enable-clicks'
          } ${this.props.showBoarding ? 'no-scroll' : 'scroll'}`}
        >
          <Helmet
            bodyAttributes={{
              class:
                this.props.modalOpen || this.props.showBoarding
                  ? 'no-scroll'
                  : 'scroll',
            }}
          />
          <SiteNavi title={siteMetadata.title} {...this.props} />

          <Container
            className={`wrapper ${this.state.entered ? 'entered' : 'exited'}`}
            mt={4}
            pb={5}
            pt={4}
          >
            <Boarding location={this.props.location} />

            {children()}
          </Container>
        </Provider>
      </StoreProvider>
    )
  }
}

const mapStateToProps = ({ rtl, modalOpen, showBoarding }) => ({
  rtl,
  modalOpen,
  showBoarding,
})

export default connect(mapStateToProps)(Template)
