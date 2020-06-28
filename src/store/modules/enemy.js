import BaseEnemy from '../../lib/enemy/BaseEnemy'

export default {
  namespaced: true,
  state: () => ({
    enemy: null,
    level: 0,
    interval: 10,
    counter: 0
  }),
  mutations: {
    setEnemy: (state, enemy) => {
      state.enemy = enemy
    },

    setLevel: (state, level) => {
      state.level = level
    },

    setCounter: (state, counter) => {
      state.counter = counter
    },

    damageRecieve: (state, n = 1) => {
      if (state.enemy.hp > 0) {
        state.enemy.hp -= n

        if (state.enemy.hp <= 0) {
          state.enemy.hp = 0
        }
      }
    }
  },
  actions: {
    buildEnemyObject({ commit, state }) {
      const builtEnemy = new BaseEnemy(
        state.enemy.name,
        state.enemy.maxHp,
        state.enemy.image,
        state.enemy.bounty,
        state.enemy.level
      )
      commit('setEnemy', builtEnemy)
    },

    spawn({ commit, state }, enemy) {
      if (state.counter >= state.interval) {
        commit('setLevel', state.level + 1)
        commit('setCounter', 0)
      }
      commit('setCounter', state.counter + 1)
      enemy.setLevel(state.level)

      commit('setEnemy', enemy)
    }
  }
}
