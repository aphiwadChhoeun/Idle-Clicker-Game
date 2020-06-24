import EnemySlug from './EnemySlug'
import EnemyToad from './EnemyToad'
import EnemySpider from './EnemySpider'
import { getRandomInt } from './helpers'

const classes = {
  EnemySlug,
  EnemyToad,
  EnemySpider
}

const POOL = [['EnemySlug', 'EnemyToad', 'EnemySpider']]

export default class EnemyPool {
  static getEnemy(stage) {
    const stagePool = POOL[stage]
    const className = stagePool[getRandomInt(0, stagePool.length)]

    return new classes[className]()
  }
}
