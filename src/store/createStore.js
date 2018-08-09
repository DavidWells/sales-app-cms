/* global window:true */
/* eslint no-underscore-dangle: 0 */

import createStore from 'unistore'
import devtools from 'unistore/devtools'
import { userAgent, osType } from '../utils'
import { dataItems } from '../data/fakeData'
import * as data from '../data/StoresData.json'
import mystoreLogo from '../assets/logo-black.png'
import { get, has } from 'lodash'

let storeParam = null
if (typeof window !== `undefined`) {
  const urlParams = new URLSearchParams(window.location.search)
  storeParam = urlParams.get('store')
}

const getStoreName = has(data, storeParam) ? storeParam : 'kay'

console.log(data[getStoreName].logo)
let initialState = {
  logo: data[getStoreName].logo,
  auth: false,
  rtl: false,
  darkMode: false,
  userAgent: userAgent(),
  os: osType(),
  store: getStoreName,
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
  data: data[getStoreName],
  feedPageData: data[getStoreName].feedPage,
  weeklyPageData: data[getStoreName].weeklyPage,
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
  itemCategories: data[getStoreName].categories,
  tasks: data[getStoreName].tasks,
  tasksStatus: {
    help_your_trending_items: false,
    new_instagram_post: false,
    complete_the_look: false,
    record_best_seller_locations: false,
  },
  currentTaskView: null,
  pagesButton: { feed: false, improve: false, trend: false, pair: false },
}

let store =
  process.env.NODE_ENV === 'production'
    ? createStore(initialState)
    : devtools(createStore(initialState))

export default store
