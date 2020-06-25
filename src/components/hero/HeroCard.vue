<template>
  <div class="hero__card box is-light">
    <div class="hero__image box__image">
      <img :src="image" :alt="name" />
    </div>
    <div class="hero__meta box__meta">{{ name }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HeroCard',

  props: {
    name: String,
    image: String,
    damage: Number
  },

  data() {
    return {
      gameLoop: null
    }
  },

  mounted() {
    this.gameLoop = setInterval(() => {
      this.heroAttack(this.damage)
    }, 1000)
  },

  methods: {
    ...mapActions(['heroAttack'])
  }
}
</script>

<style lang="scss" scoped>
.hero__card {
  width: 128px;
}
</style>
