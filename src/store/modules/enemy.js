export default {
  namespaced: true,
  state: () => ({
    enemy: null,
    level: 0,
    interval: 2,
    counter: 0
  }),
  mutations: {
    damageRecieve: (state, n = 1) => {
      if (state.enemy.hp > 0) {
        state.enemy.hp -= n

        if (state.enemy.hp < 0) {
          state.enemy.hp = 0
        }
      }
    }
  },
  actions: {
    spawn({ state }, enemy) {
      if (state.counter >= state.interval) {
        state.level += 1
        state.counter = 0
      }
      state.counter += 1
      enemy.setLevel(state.level)

      state.enemy = enemy
    }
  }
}
