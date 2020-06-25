<template>
  <div class="heroes__stats__container">
    <div class="stats">
      <span class="label">Squad:</span>
      <span class="value">{{ heroes.length }}/{{ limit }}</span>
    </div>
    <div class="stats">
      <span class="label">DPS:</span>
      <span class="value">{{ totalDps }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroStats',

  props: {
    heroes: Array,
    limit: Number
  },

  computed: {
    totalDps() {
      if (this.heroes.length <= 0) return 0
      if (this.heroes.length === 1) return this.heroes[0].damage
      return this.heroes.reduce((t1, t2) => t1.damage + t2.damage)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.heroes__stats__container {
  width: 400px;
  display: flex;
  flex-wrap: wrap;

  .stats {
    flex: 1;

    .label {
      padding-right: 1rem;
    }

    .value {
      color: $secondary;
    }
  }
}
</style>
