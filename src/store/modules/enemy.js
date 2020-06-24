export default {
  namespaced: true,
  state: () => ({
    name: null,
    hp: 0,
    image: null,
    maxHp: 0
  }),
  mutations: {
    decreaseHp: (state, n = 1) => {
      if (state.hp > 0) {
        state.hp -= n

        if (state.hp < 0) {
          state.hp = 0
        }
      }
    }
  },
  actions: {
    spawn({ state }, enemy) {
      state.name = enemy.name
      state.hp = enemy.hp
      state.image = enemy.image
      state.maxHp = enemy.hp
    }
  }
}
