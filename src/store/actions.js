import { dataItems } from '../data/fakeData'

// let data = JSON.stringify(dataItems)
// console.log(data)

const actions = store => ({
  // Async actions can be pure async/promise functions:

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

  selectTasks: (state, obj, id) => {
    let newObject = obj.map(
      item => (item.id === id ? Object.assign({}, item, { done: true }) : item)
    )

    return { tasks: [...newObject] }
  },

  selectCurrentTaskView: (state, id) => ({
    currentTaskView: id,
  }),
})

export default actions
