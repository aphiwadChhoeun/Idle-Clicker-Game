<template>
  <div class="healthpoint__wrapper">
    <div class="healthpoint__bar" :style="{ width: hpPercentage + '%' }"></div>
    <span>{{ hp }} / {{ maxHp }}</span>
  </div>
</template>

<script>
export default {
  name: 'HealthPointBar',

  props: {
    hp: Number,
    maxHp: Number
  },

  computed: {
    hpPercentage() {
      return Math.floor((this.hp * 100) / this.maxHp)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/variables';

.healthpoint__wrapper {
  position: relative;
  width: 100%;
  background: $light;
  color: $dark;
  padding: 0.5rem;
  border-radius: 0.2rem;
  overflow: hidden;

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 5px $dark;
  }

  .healthpoint__bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $primary;
    transition: all 100ms ease-in-out;
  }

  span {
    position: relative;
  }
}
</style>
