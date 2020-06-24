import Vue from 'vue'
import Vuex from 'vuex'

import EnemyStore from './modules/enemy'
import ModalStore from './modules/modal'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    halt: false,
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
      if (state.Enemy.hp > 0) {
        commit('Enemy/decreaseHp', state.damage)
      }
    }
  },
  modules: {
    Enemy: EnemyStore,
    Modal: ModalStore
  }
})

export default store
