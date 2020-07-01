export default class BaseEnemy {
  constructor(name, hp, image, bounty, level = 0) {
    this.name = name
    this.hp = hp
    this.maxHp = hp
    this.image = image
    this.bounty = bounty
    this.level = level
  }

  setHp(hp) {
    this.hp = hp
  }

  upgradeLevel() {
    this.level += 1
    this.recalibrateHp()
    this.recalibrateBounty()
  }

  setLevel(level) {
    this.level = level
    this.recalibrateHp()
    this.recalibrateBounty()
  }

  recalibrateBounty() {
    this.bounty += Math.ceil(this.level * this.bounty * 1.33)
  }

  recalibrateHp() {
    this.hp += Math.ceil(this.level * this.hp * 2.5)
    this.maxHp = this.hp
  }
}
