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

  addCurrentLocation: (state, newLocation) => ({
    location: { ...newLocation },
  }),
  // async getStuff(state) {
  //   let res = await fetch(data)
  //   return { stuff: await res.json() }
  // },
})

export default actions
