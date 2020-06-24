export default {
  namespaced: true,
  state: () => ({
    name: 'Bad guy',
    hp: 100,
    image: null
  }),
  mutations: {
    decreaseHp: (state, n = 1) => {
      if (state.hp > 0) {
        state.hp -= n
      }
    }
  },
  actions: {
    init({ state }, enemy) {
      state.name = enemy.name
      state.hp = enemy.hp
      state.image = enemy.image
    }
  }
}
