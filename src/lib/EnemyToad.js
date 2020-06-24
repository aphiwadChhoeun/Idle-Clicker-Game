import BaseEnemy from './BaseEnemy'

export default class EnemyToad extends BaseEnemy {
  constructor() {
    super('Toadah', 25)
    this.image = '/images/toad.webp'
  }
}
