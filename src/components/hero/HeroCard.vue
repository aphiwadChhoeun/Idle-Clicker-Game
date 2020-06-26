<template>
  <div class="hero__card box is-light">
    <div class="hero__image box__image">
      <img :src="image" :alt="name" />
    </div>
    <div class="hero__meta box__meta">
      <div class="gauge" ref="attackGauge"></div>
      <p class="name">{{ name }}</p>
      <p><span>Lvl</span> {{ level }}</p>
      <p><span class="mdi" :class="damageIcon"></span> {{ damage }}</p>
    </div>
    <div class="hero__actions">
      <button class="upgrade" @click="upgradeHero(id)">
        <span>Upgrade: </span>
        <span class="icon coin"></span> <span>{{ upgradeCost | numeral('0.[0]a') }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { gsap } from 'gsap'

export default {
  name: 'HeroCard',

  props: {
    id: String,
    name: String,
    image: String,
    damage: Number,
    damageType: String,
    level: Number,
    upgradeCost: Number
  },

  computed: {
    damageIcon() {
      if (this.damageType === 'normal') {
        return 'mdi-sword'
      }
      return 'mdi-sword'
    }
  },

  watch: {
    gameLoop(val) {
      if (val !== null) {
        gsap.to(this.$refs.attackGauge, {
          startAt: {
            width: '0%'
          },
          width: '100%',
          duration: 1.0,
          repeat: -1
        })
      }
    }
  },

  data() {
    return {
      gameLoop: null,
      attackSpeed: 1000
    }
  },

  mounted() {
    this.gameLoop = setInterval(() => {
      this.heroAttack(this.damage)
    }, this.attackSpeed)
  },

  methods: {
    ...mapActions('Hero', ['upgradeHero']),
    ...mapActions(['heroAttack'])
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.hero__card {
  margin: 0;
  padding: 0;
  width: 200px;
  overflow: hidden;

  .hero__meta {
    padding: 0 0.5rem 0.5rem 0.5rem;
    background: $primary;
    position: relative;

    .gauge {
      position: absolute;
      left: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background: $lightPrimary;
      z-index: 0;
    }

    p {
      position: relative;
      margin: 0;
      padding: 0;
      text-align: left;
      font-size: 1rem;
      color: $dark;

      span {
        color: $dark;
      }

      &.name {
        text-align: center;
        font-size: 1.5rem;
      }
    }
  }

  .hero__actions {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    button {
      width: 100%;
      height: 3rem;
      border: none;
      border-radius: 0;
      cursor: pointer;
      text-align: left;

      &:focus {
        outline: none;
      }

      &:active {
        box-shadow: inset 0 5px 2px adjust-color($dark, $alpha: -0.8);
      }

      &:hover {
        background: $primary;
      }

      span {
        color: $dark;
      }
    }
  }
}
</style>
