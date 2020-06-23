<template>
  <div class="enemy__wrapper">
    <div class="healthpoint">{{ enemy.hp }}hp</div>

    <div class="enemy__card">
      <div class="enemy__image">
        <img :src="enemy.image" :alt="enemy.name" />
      </div>

      <div class="enemy__meta">
        {{ enemy.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EnemyComponent',

  computed: {
    ...mapState(['enemy'])
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
    border-radius: .5rem;
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
