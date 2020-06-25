import EnemySlug from './EnemySlug'
import EnemyToad from './EnemyToad'
import EnemySpider from './EnemySpider'
import { getRandomInt } from '../helpers'

const POOL = [[new EnemySlug(), new EnemyToad(), new EnemySpider()]]

export default class EnemyPool {
  static getEnemy(stage) {
    const stagePool = POOL[stage]
    const cloneEnemy = { ...stagePool[getRandomInt(0, stagePool.length)] }

    return cloneEnemy
  }
}
