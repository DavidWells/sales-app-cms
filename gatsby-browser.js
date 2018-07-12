/* globals window */

import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'unistore/react'
import store from './src/store/createStore'

// let store = createStore({ count: 0 })

exports.replaceRouterComponent = ({ history }) => {
  //   const store = store()

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}
