import Vue from 'vue'
import Vuex from 'vuex'

import EnemyStore from './modules/enemy'
import ModalStore from './modules/modal'
import HeroStore from './modules/hero'
import SettingsStore from './modules/settings'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    halt: false,
    stage: 0,
    coin: 0,
    damage: 5
  },
  mutations: {
    increaseCoin: (state, amount = 1) => {
      state.coin += amount
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
      if (state.Enemy.enemy.hp > 0) {
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
    Hero: HeroStore,
    Settings: SettingsStore
  }
})

export default store
