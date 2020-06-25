export default class BaseHero {
  constructor(id, name, image, cost, damage, damageType = 'normal') {
    this.id = id
    this.name = name
    this.cost = cost
    this.damage = damage
    this.damageType = damageType
    this.image = image
  }
}
