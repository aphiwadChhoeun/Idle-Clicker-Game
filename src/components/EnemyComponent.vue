<template>
  <div class="enemy__wrapper">
    <div class="healthpoint">{{ hp }}hp</div>

    <div class="enemy__card">
      <div class="enemy__image">
        <img :src="image" :alt="name" />
      </div>

      <div class="enemy__meta">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EnemyPool from '../lib/EnemyPool'

export default {
  name: 'EnemyComponent',

  computed: {
    ...mapState({
      hp: state => state.Enemy.hp,
      name: state => state.Enemy.name,
      image: state => state.Enemy.image,

      stage: state => state.stage
    })
  },

  watch: {
    hp(newHp) {
      if (newHp <= 0) {
        this.$store.commit('increaseCoin')
        this.$store.dispatch('Enemy/init', EnemyPool.getEnemy(this.stage))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.enemy__wrapper {
  width: 100%;

  .healthpoint {
    width: 100%;
    background: $hp;
    color: $dark;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  .enemy__card {
    width: 350px;
    margin-top: 1rem;
    padding: 1rem;
    background: $light;
    border-radius: 1rem;

    .enemy__image {
      width: 100%;
      height: auto;

      img {
        width: 100%;
        height: auto;
      }
    }

    .enemy__meta {
      font-family: $altFont;
      color: $dark;
      font-size: 1.5rem;
      text-align: center;
    }
  }
}
</style>
