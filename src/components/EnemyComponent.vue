<template>
  <div class="enemy__wrapper">
    <health-point-bar :hp="hp" :maxHp="maxHp" />

    <enemy-card ref="enemyCard" :name="name" :image="image" :stage="stage" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EnemyCard from './EnemyCard'
import HealthPointBar from './HealthPointBar'

export default {
  name: 'EnemyComponent',

  components: {
    HealthPointBar,
    EnemyCard
  },

  computed: {
    ...mapState('Enemy', ['name', 'hp', 'image', 'maxHp']),
    ...mapState(['stage'])
  },

  watch: {
    hp(newHp) {
      if (newHp <= 0) {
        this.$store.commit('increaseCoin')
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
