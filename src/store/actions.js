const actions = store => ({
  toggleModal: state => ({
    modalOpen: !state.modalOpen,
  }),
})

export default actions
