// import BaseEnemy from './BaseEnemy'
import { getRandomInt } from '../helpers'
import enemies from './enemies.json'
import BaseEnemy from './BaseEnemy'

const enemyPool = []

enemies.forEach(stage => {
  const layer = []
  stage.forEach(data => {
    layer.push(new BaseEnemy(data.name, data.hp, data.image))
  })
  enemyPool.push(layer)
})

export default class EnemyPool {
  static getEnemy(stage) {
    const stagePool = enemyPool[stage]
    const cloneEnemy = { ...stagePool[getRandomInt(0, stagePool.length)] }

    return cloneEnemy
  }
}
