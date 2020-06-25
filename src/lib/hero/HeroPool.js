import HeroSoldier from './HeroSoldier'

const POOL = {
  HeroSoldier: new HeroSoldier()
}

export default class HeroPool {
  static getHero(name) {
    if (POOL[name]) {
      return { ...POOL[name] }
    }

    return null
  }

  static getAllHeroes() {
    const curated = []
    Object.values(POOL).forEach(hero => {
      curated.push(hero)
    })

    return curated
  }
}
