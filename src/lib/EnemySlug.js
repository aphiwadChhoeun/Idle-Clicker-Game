import BaseEnemy from './BaseEnemy'

export default class EnemySlug extends BaseEnemy {
  constructor() {
    super('Slug Boi', 50)
    this.image = '/images/slug.webp'
  }
}
