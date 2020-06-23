import EnemySlug from './EnemySlug'

const classes = {
  EnemySlug
}

const POOL = [['EnemySlug']]

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export default class EnemyPool {
  static getEnemy(stage) {
    const stagePool = POOL[stage]
    const className = stagePool[getRandomInt(0, stagePool.length - 1)]

    return new classes[className]()
  }
}
