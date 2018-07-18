/* global window:true */
/* eslint no-underscore-dangle: 0 */

import createStore from 'unistore'
import devtools from 'unistore/devtools'
import { userAgent, osType } from '../utils'
import { dataItems } from '../data/fakeData'

let initialState = {
  auth: false,
  rtl: false,
  darkMode: false,
  userAgent: userAgent(),
  os: osType(),
  count: 0,
  modalOpen: false,
  colors: {
    black: '#3c3b3b',
    grey: 'grey',
    lightGrey: '#eaeaea',
    bestSeller: 'rgba(0,147,255,0.5)',
    trending: 'yellow',
    new: 'green',
    onSale: 'pink',
    missing: 'gray',
  },
  items: dataItems,
  itemCategories: [
    { name: 'Best Seller', id: 'bestSeller', position: 0 },
    { name: 'Trending', id: 'trending', position: 1 },
    { name: 'New', id: 'new', position: 2 },
    { name: 'On Sale', id: 'onSale', position: 3 },
    { name: 'Missing', id: 'missing', position: 4 },
  ],
  tasks: [
    { name: 'Highlight Best Sellers!', type: 'regular', done: false },
    { name: 'Increase the sales', type: 'trend', done: false },
    { name: 'Trend alert', type: 'trend', done: false },
    { name: 'Sold together', type: 'pair', done: false },
  ],
  pagesButton: { feed: false, trend: false, pair: false },
}

let store =
  process.env.NODE_ENV === 'production'
    ? createStore(initialState)
    : devtools(createStore(initialState))

export default store
