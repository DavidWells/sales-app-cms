import { dataItems } from '../data/fakeData'

// let data = JSON.stringify(dataItems)
// console.log(data)

const actions = store => ({
  toggleModal: state => ({
    modalOpen: !state.modalOpen,
  }),
  addItems: state => ({
    items: dataItems,
  }),

  highLightButtonFeed: state => ({
    buttonFeed: true,
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

  hideBoarding: state => ({
    showBoarding: false,
  }),

  selectTasks: (state, obj) => ({
    tasks: { ...obj },
  }),
})

export default actions
