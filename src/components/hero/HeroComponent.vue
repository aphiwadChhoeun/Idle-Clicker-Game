<template>
  <div class="heroes__wrapper">
    <div class="heroes__title">Heroes</div>
    <hero-stats :heroes="heroes" :limit="limit" />
    <div class="heroes__container">
      <hero-card
        v-for="hero in heroes"
        :key="hero.id"
        :id="hero.id"
        :name="hero.name"
        :image="hero.image"
        :damage="hero.damage"
        :damage-type="hero.damageType"
        :level="hero.level"
        :upgrade-cost="hero.getUpgradeCost()"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeroCard from './HeroCard'
import HeroStats from './HeroStats'

export default {
  name: 'HeroComponent',

  components: {
    HeroCard,
    HeroStats
  },

  computed: {
    ...mapState('Hero', ['heroes', 'limit'])
  }
}
</script>

<style lang="scss" scoped>
.heroes__wrapper {
  width: 100%;

  .heroes__title {
    font-size: 1.5rem;
  }

  .heroes__container {
    margin-top: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    justify-items: center;
  }
}
</style>
