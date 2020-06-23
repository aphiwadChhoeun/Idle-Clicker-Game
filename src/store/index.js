import Vue from 'vue'
import Vuex from 'vuex'

import EnemyStore from './modules/enemy'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stage: 0,
    coin: 0,
    damage: 10
  },
  mutations: {
    increaseCoin: state => {
      state.coin += 1
    }
  },
  actions: {
    attack({ commit, state }) {
      commit('decreaseHp', state.damage)
    }
  },
  modules: {
    enemy: EnemyStore
  }
})
