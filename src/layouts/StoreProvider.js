import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'unistore/react'
import store from '../store/createStore'

class StoreProvider extends React.Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

StoreProvider.propTypes = {
  children: PropTypes.any,
}

export default StoreProvider
