<template>
  <div class="enemy__card" ref="card">
    <div class="enemy__image">
      <img :src="image" :alt="name" />
    </div>

    <div class="enemy__meta">Lvl.{{ level }} {{ name }}</div>
  </div>
</template>

<script>
import EnemyPool from '../../lib/enemy/EnemyPool'
import { gsap } from 'gsap'

export default {
  name: 'EnemyCard',

  props: {
    name: String,
    image: String,
    level: Number,
    bounty: Number,
    stage: Number
  },

  data() {
    return {
      dieTl: null,
      spawnTl: null,
      hitTl: null
    }
  },

  mounted() {
    this.onSpawn()
  },

  methods: {
    onSpawn() {
      this.playSpawnAnimation()
    },

    onDie() {
      this.playDieAnimation().then(() => {
        const enemy = EnemyPool.getEnemy(this.stage)
        this.$store.dispatch('Enemy/spawn', enemy)
        this.onSpawn()
      })
    },

    onHit() {
      this.playHitAnimation()
    },

    playSpawnAnimation() {
      if (this.spawnTl == null) {
        this.spawnTl = gsap.timeline({ paused: true }).to(this.$refs.card, {
          startAt: {
            scale: 0.0
          },
          opacity: 1.0,
          scale: 1.0,
          duration: 0.3,
          ease: 'power3.out'
        })
      }

      return this.spawnTl.restart()
    },

    playDieAnimation() {
      if (this.dieTl == null) {
        this.dieTl = gsap.timeline({ paused: true }).to(this.$refs.card, {
          opacity: 0.0,
          duration: 0.5,
          ease: 'power3.out'
        })
      }

      return this.dieTl.restart()
    },

    playHitAnimation() {
      if (this.hitTl == null) {
        const hitEffect = {
          amount: 1.0
        }
        this.hitTl = gsap
          .timeline({ paused: true })
          .to(hitEffect, {
            amount: 5.0,
            duration: 0.1,
            ease: 'power3.out',
            onUpdate: () => {
              this.$refs.card.style.filter = `brightness(${hitEffect.amount})`
            }
          })
          .to(hitEffect, {
            amount: 1.0,
            duration: 0.1,
            ease: 'power3.out',
            onUpdate: () => {
              this.$refs.card.style.filter = `brightness(${hitEffect.amount})`
            }
          })
      }

      return this.hitTl.restart()
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/variables';

.enemy__card {
  position: relative;
  width: 280px;
  height: 450px;
  margin: 1rem auto;
  padding: 40px;
  background: url('/images/card_bg.webp') no-repeat;
  background-size: contain;
  overflow: hidden;

  .enemy__image {
    position: relative;
    width: 100%;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }

  .enemy__meta {
    margin-top: 30px;
    font-family: $altFont;
    color: $dark;
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
