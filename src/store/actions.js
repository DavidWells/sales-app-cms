import { dataItems } from '../data/fakeData'
import { get, has } from 'lodash'
import * as data from '../data/StoresData.json'

let storeParam = null
if (typeof window !== `undefined`) {
  const urlParams = new URLSearchParams(window.location.search)
  storeParam = urlParams.get('store')
}

const getStoreName = has(data, storeParam) ? storeParam : 'kay'

const actions = store => ({
  // Async actions can be pure async/promise functions:
  setStoreName: state => ({
    store: getStoreName,
  }),
  setFeedPageData: state => {
    store.setState({
      feedPageData: data[getStoreName].feedPage,
    })
  },
  toggleModal: state => ({
    modalOpen: !state.modalOpen,
  }),
  setCurrentTopMenu: (state, id) => ({
    currentTopMenu: id,
  }),
  addItems: state => ({
    items: dataItems,
  }),

  highLightButtonFeed: state => ({
    buttonFeed: true,
  }),
  highLightButtonWeekly: state => ({
    buttonWeekly: true,
  }),
  highLightButtonImprove: state => ({
    buttonImprove: true,
  }),
  highLightButtonTrend: state => ({
    buttonTrend: true,
  }),
  highLightButtonPair: state => ({
    buttonPair: true,
  }),
  addCurrentLocation: (state, newLocation) => ({
    location: { ...newLocation },
  }),

  toggleTrendItem: state => ({
    trendItemSelected: !state.trendItemSelected,
  }),
  resetTrendItem: state => ({
    trendItemSelected: false,
  }),

  incremenImproveSelectedItems: ({ improvePageSelectedItems }) => ({
    improvePageSelectedItems: improvePageSelectedItems + 1,
  }),
  decrementImproveSelectedItems: ({ improvePageSelectedItems }) => ({
    improvePageSelectedItems: improvePageSelectedItems - 1,
  }),
  resetImproveSelectedItems: state => ({
    improvePageSelectedItems: 0,
  }),

  incremenPairSelectedItems: ({ pairPageSelectedItems }) => ({
    pairPageSelectedItems: pairPageSelectedItems + 1,
  }),
  decrementPairSelectedItems: ({ pairPageSelectedItems }) => ({
    pairPageSelectedItems: pairPageSelectedItems - 1,
  }),
  resetPairSelectedItems: state => ({
    pairPageSelectedItems: 0,
  }),

  hideBoarding: state => ({
    showBoarding: false,
  }),

  selectTasks: ({ tasksStatus }, obj, key) => {
    let updatedTasks = Object.assign(obj, { [key]: true })
    return { tasksStatus: { ...updatedTasks } }
  },

  selectCurrentTaskView: (state, id) => ({
    currentTaskView: id,
  }),
})

export default actions
