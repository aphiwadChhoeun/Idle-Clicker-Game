import BaseHero from './BaseHero'

export default class HeroSoldier extends BaseHero {
  constructor() {
    super('Soldier', 20, 1)
    this.image = '/images/soldier_avatar.webp'
  }
}
