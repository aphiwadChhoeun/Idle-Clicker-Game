export default class BaseHero {
  constructor(
    id,
    name,
    avatar,
    image,
    cost,
    damage,
    damageType = 'normal',
    level = 1
  ) {
    this.id = id
    this.name = name
    this.avatar = avatar
    this.cost = cost
    this.damage = damage
    this.damageType = damageType
    this.image = image
    this.level = level
  }

  upgradeLevel() {
    this.level += 1
    this.damage += Math.ceil(this.damage * 0.25)
  }

  getUpgradeCost() {
    return Math.ceil(this.level * this.cost * 0.3)
  }
}
