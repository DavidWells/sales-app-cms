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

  incremenImproveSelectedItems: ({ improvePageSelectedItems }) => ({
    improvePageSelectedItems: improvePageSelectedItems + 1,
  }),
  decrementImproveSelectedItems: ({ improvePageSelectedItems }) => ({
    improvePageSelectedItems: improvePageSelectedItems - 1,
  }),
})

export default actions
