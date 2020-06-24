export default {
  namespaced: true,
  state: () => ({
    open: false,
    modal: null
  }),
  mutations: {
    openModal: (state, modal) => {
      state.open = true
      state.modal = modal
    },

    closeModal: state => {
      state.open = false
      state.modal = null
    }
  }
}
