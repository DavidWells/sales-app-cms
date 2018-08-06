/* global window:true */
/* eslint no-underscore-dangle: 0 */

import createStore from 'unistore'
import devtools from 'unistore/devtools'
import { userAgent, osType } from '../utils'
import { dataItems } from '../data/fakeData'
import * as data from '../data/StoresData.json'
import mystoreLogo from '../assets/logo-black.png'

let initialState = {
  logo: mystoreLogo,
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
  currentTopMenu: null,
  buttonFeed: false,
  buttonWeekly: false,
  buttonImprove: false,
  buttonTrend: false,
  buttonPair: false,
  improvePageSelectedItems: 0,
  pairPageSelectedItems: 0,
  trendItemSelected: false,
  data: data['kay'],
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
  itemCategories: data['kay'].categories,
  tasks: data['kay'].tasks,
  currentTaskView: null,
  pagesButton: { feed: false, improve: false, trend: false, pair: false },
}

let store =
  process.env.NODE_ENV === 'production'
    ? createStore(initialState)
    : devtools(createStore(initialState))

export default store
