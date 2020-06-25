export default {
  namespaced: true,
  state: () => ({
    heroes: [],
    limit: 12
  }),
  mutations: {
    addHero: (state, hero) => {
      if (state.heroes.length < state.limit) {
        state.heroes.push(hero)
      }
    }
  },
  actions: {}
}
