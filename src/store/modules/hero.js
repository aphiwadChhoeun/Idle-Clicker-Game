export default {
  namespaced: true,
  state: () => ({
    heroes: [],
    lineups: [],
    limit: 4
  }),
  mutations: {
    addHero: (state, hero) => {
      state.heroes.push(hero)
    },

    addLineups: (state, hero) => {
      if (state.lineups.length < state.limit) {
        state.lineups.push(hero)
      }
    }
  },
  actions: {}
}
