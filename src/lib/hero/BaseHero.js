export default class Hero {
  constructor(name, cost, damage, damageType = 'normal') {
    this.name = name
    this.cost = cost
    this.damage = damage
    this.damageType = damageType
    this.image = null
  }
}
