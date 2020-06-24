import BaseEnemy from './BaseEnemy'

export default class EnemySpider extends BaseEnemy {
  constructor() {
    super('Spiderling', 23)
    this.image = '/images/wood_spider.webp'
  }
}
