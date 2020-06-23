export default class BaseEnemy {
  constructor(name = 'Bad Dude', hp = 100) {
    this.name = name
    this.hp = hp
    this.image = null

    this.init()
  }

  init() {
    // to be implemented
    console.log(`${this.name} init`)
  }

  onAttacked() {
    // play on attacked animation
    console.log(`${this.name} is attacked`)
  }

  onDied() {
    // play die animation
    console.log(`${this.name} died`)
  }
}
