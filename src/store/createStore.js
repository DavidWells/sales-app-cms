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
  firstStart: true,
  showBoarding: true,
  count: 0,
  modalOpen: false,
  location: null,
  buttonFeed: false,
  buttonImprove: false,
  buttonTrend: false,
  buttonPair: false,
  improvePageSelectedItems: 0,
  trendItemSelected: false,
  colors: {
    black: '#3c3b3b',
    grey: 'grey',
    lightGrey: '#eaeaea',
    bestSeller: 'gba(232, 126, 4, 0.7)',
    trending: 'yellow',
    new: 'green',
    onSale: 'pink',
    missing: 'gray',
  },
  items: dataItems,
  itemCategories: [
    { name: 'Engagement Rings', id: 'trending', position: 1 },
    { name: 'Earrings', id: 'new', position: 2 },
    { name: 'Necklaces', id: 'missing', position: 4 },
    { name: 'Watches', id: 'bestSeller', position: 0 },
    { name: 'On Sale', id: 'onSale', position: 3 },
  ],
  tasks: [
    {
      name: 'Help your trending items',
      type: 'improve',
      done: false,
      badge: 'trending',
      id: 12,
    },
    {
      name: 'New instagram post!',
      type: 'trend',
      done: false,
      badge: 'instagram',
      id: 13,
    },
    {
      name: 'Complete the look!',
      type: 'pair',
      done: false,
      badge: 'pair',
      id: 14,
    },
    {
      name: 'Record best seller locations',
      type: 'improve',
      done: false,
      badge: 'bestSeller',
      id: 15,
    },
  ],
  pagesButton: { feed: false, improve: false, trend: false, pair: false },
}

let store =
  process.env.NODE_ENV === 'production'
    ? createStore(initialState)
    : devtools(createStore(initialState))

export default store
