/* global window:true */
/* eslint no-underscore-dangle: 0 */

import createStore from 'unistore'
import devtools from 'unistore/devtools'
import { userAgent, osType } from '../utils'

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
    mostPopular: 'yellow',
    new: 'green',
    onSale: 'pink',
    missing: 'gray',
  },
  items: [],
  itemCategories: [
    { name: 'Best Seller', id: 'bestSeller' },
    { name: 'Most Popular', id: 'mostPopular' },
    { name: 'New', id: 'new' },
    { name: 'On Sale', id: 'onSale' },
    { name: 'Missing', id: 'missing' },
    { name: 'Favorites', id: 'favorites' },
  ],
  tasks: [
    { name: 'Highlight Best Sellers!', type: 'regular', done: false },
    { name: 'Increase the sales', type: 'trend', done: false },
    { name: 'Trend alert', type: 'trend', done: false },
    { name: 'Sold together', type: 'pair', done: false },
  ],
}

let store =
  process.env.NODE_ENV === 'production'
    ? createStore(initialState)
    : devtools(createStore(initialState))

export default store
