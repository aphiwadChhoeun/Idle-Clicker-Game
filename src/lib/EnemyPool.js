import EnemySlug from './EnemySlug'
import { getRandomInt } from './helpers'

const classes = {
  EnemySlug
}

const POOL = [['EnemySlug']]

export default class EnemyPool {
  static getEnemy(stage) {
    const stagePool = POOL[stage]
    const className = stagePool[getRandomInt(0, stagePool.length - 1)]

    return new classes[className]()
  }
}
