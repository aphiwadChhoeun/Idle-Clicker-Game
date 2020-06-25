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
    const target = stagePool[getRandomInt(0, stagePool.length)]
    const cloneEnemy = Object.assign(
      Object.create(Object.getPrototypeOf(target)),
      target
    )

    return cloneEnemy
  }
}
