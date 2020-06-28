import Vue from 'vue'
import Vuex from 'vuex'

import EnemyPool from '../lib/enemy/EnemyPool'
import EnemyStore from './modules/enemy'
import ModalStore from './modules/modal'
import HeroStore from './modules/hero'
import SettingsStore from './modules/settings'

import createPersistPlugin from './plugins/PersistPlugin'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
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
      if (state.Enemy.enemy.hp >= 0) {
        commit('Enemy/damageRecieve', state.damage)
      }
    },

    heroAttack({ commit }, damage) {
      commit('Enemy/damageRecieve', damage)
    },

    initStore({ dispatch, state }) {
      // Check if the ID exists
      const stateData = localStorage.getItem('ClickerGame')
      if (stateData) {
        // Replace the state object with the stored item
        store.replaceState(Object.assign(state, JSON.parse(stateData)))
        dispatch('Enemy/buildEnemyObject')

        if (state.Hero.heroes.length > 0) {
          dispatch('Hero/buildHeroesObjects')
        }
      } else {
        const enemy = EnemyPool.getEnemy(state.stage)
        dispatch('Enemy/spawn', enemy)
      }
    }
  },
  modules: {
    Enemy: EnemyStore,
    Modal: ModalStore,
    Hero: HeroStore,
    Settings: SettingsStore
  },
  plugins: [createPersistPlugin()]
})

export default store
