import BaseEnemy from './BaseEnemy'

export default class EnemySlug extends BaseEnemy {
  constructor() {
    super('Slug Boi', 20)
    this.image = '/images/slug.webp'
  }
}
