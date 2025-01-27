import BaseHero from '../../lib/hero/BaseHero'

export default {
  namespaced: true,
  state: () => ({
    heroes: [],
    limit: 12
  }),
  mutations: {
    addHero: (state, hero) => {
      state.heroes.push(hero)
    },

    levelUpHero: (state, index) => {
      state.heroes[index].upgradeLevel()
    }
  },
  actions: {
    buildHeroesObjects({ state }) {
      const builtHeroes = []
      state.heroes.forEach(data => {
        builtHeroes.push(
          new BaseHero(
            data.id,
            data.name,
            data.avatar,
            data.image,
            data.cost,
            data.damage,
            data.damageType,
            data.level
          )
        )
      })

      state.heroes = builtHeroes
    },

    buyHero({ commit, state }, hero) {
      return new Promise((resolve, reject) => {
        if (state.heroes.length < state.limit) {
          const foundIndex = state.heroes.findIndex(el => el.id === hero.id)

          if (foundIndex === -1) {
            commit('addHero', hero)
            resolve()
          } else {
            reject(new Error(`You already recruited ${hero.name}.`))
          }
        }
        reject(
          new Error(
            `Cannot buy hero: You can't recruit more heroes than limit of ${state.limit}`
          )
        )
      })
    },

    upgradeHero({ commit, state, rootState }, heroId) {
      const foundIndex = state.heroes.findIndex(el => el.id === heroId)
      const upgradeCost = state.heroes[foundIndex].getUpgradeCost()
      if (foundIndex > -1) {
        if (upgradeCost <= rootState.coin) {
          commit('decreaseCoin', upgradeCost, { root: true })
          commit('levelUpHero', foundIndex)
        }
      }
    }
  }
}
