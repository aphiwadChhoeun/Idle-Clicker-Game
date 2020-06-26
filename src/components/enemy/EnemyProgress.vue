<template>
  <div class="enemy__progress__container">
    <div class="progress">{{ counter }}/{{ interval }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EnemyProgress',

  computed: {
    ...mapState('Enemy', ['counter', 'interval'])
  }
}
</script>

<style lang="scss" scoped>
.enemy__progress__container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
</style>
