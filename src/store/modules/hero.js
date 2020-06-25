export default {
  namespaced: true,
  state: () => ({
    heroes: [],
    limit: 12
  }),
  mutations: {
    addHero: (state, hero) => {
      state.heroes.push(hero)
    }
  },
  actions: {
    buyHero({ commit, state }, hero) {
      return new Promise((resolve, reject) => {
        if (state.heroes.length < state.limit) {
          const foundIndex = state.heroes.findIndex(el => el.id === hero.id)

          if (foundIndex === -1) {
            commit('addHero', hero)
            resolve()
          } else {
            reject(new Error('Cannot buy hero: already owned this hero.'))
          }
        }
        reject(new Error('Cannot buy hero: exceed heroes limit.'))
      })
    }
  }
}
