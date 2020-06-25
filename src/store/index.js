import Vue from 'vue'
import Vuex from 'vuex'

import EnemyStore from './modules/enemy'
import ModalStore from './modules/modal'
import HeroStore from './modules/hero'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    halt: false,
    stage: 0,
    coin: 1000,
    damage: 1
  },
  mutations: {
    increaseCoin: state => {
      state.coin += 1
    },

    decreaseCoin: (state, amount) => {
      state.coin -= amount
      if (state.coin < 0) {
        state.coin = 0
      }
    }
  },
  actions: {
    attack({ commit, state }) {
      if (state.Enemy.hp > 0) {
        commit('Enemy/damageRecieve', state.damage)
      }
    },

    heroAttack({ commit }, damage) {
      commit('Enemy/damageRecieve', damage)
    }
  },
  modules: {
    Enemy: EnemyStore,
    Modal: ModalStore,
    Hero: HeroStore
  }
})

export default store
