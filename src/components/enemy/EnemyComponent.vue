<template>
  <div class="enemy__wrapper">
    <health-point-bar :hp="hp" :maxHp="maxHp" />

    <enemy-card
      ref="enemyCard"
      :name="name"
      :image="image"
      :level="level"
      :bounty="bounty"
      :stage="stage"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EnemyCard from './EnemyCard'
import HealthPointBar from '../HealthPointBar'

export default {
  name: 'EnemyComponent',

  components: {
    HealthPointBar,
    EnemyCard
  },

  computed: {
    ...mapState('Enemy', {
      name: state => state.enemy.name,
      hp: state => state.enemy.hp,
      maxHp: state => state.enemy.maxHp,
      image: state => state.enemy.image,
      level: state => state.enemy.level,
      bounty: state => state.enemy.bounty
    }),
    ...mapState(['stage'])
  },

  watch: {
    hp(newHp) {
      if (newHp <= 0) {
        this.$store.commit('increaseCoin', this.bounty)
        this.$refs.enemyCard.onDie()
      }
      this.$refs.enemyCard.onHit()
    }
  }
}
</script>

<style lang="scss" scoped>
.enemy__wrapper {
  width: 100%;
}
</style>
