import BaseHero from './BaseHero'
import heroes from './heroes.json'

const heroesPool = []

heroes.forEach(data => {
  heroesPool.push(
    new BaseHero(
      data.id,
      data.name,
      data.avatar,
      data.image,
      data.cost,
      data.damage,
      data.damageType
    )
  )
})

export default class HeroPool {
  static getHero(id) {
    const foundIndex = heroesPool.findIndex(item => item.id === id)
    if (foundIndex > -1) {
      return Object.assign(
        Object.create(Object.getPrototypeOf(heroesPool[foundIndex])),
        heroesPool[foundIndex]
      )
    }

    return null
  }

  static getAllHeroes() {
    const curated = []
    Object.values(heroesPool).forEach(hero => {
      curated.push(hero)
    })

    return curated
  }
}
