<template>
  <div class="enemy__wrapper">
    <div class="healthpoint__wrapper">
      <div
        class="healthpoint__bar"
        :style="{ width: hpPercentage + '%' }"
      ></div>
      <span>{{ hp }}hp</span>
    </div>

    <div class="enemy__card" ref="card">
      <div class="enemy__image">
        <img :src="image" :alt="name" />
      </div>

      <div class="enemy__meta">
        {{ name }}
      </div>

      <div class="slash" ref="slash">
        <img src="images/slash.webp" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EnemyPool from '../lib/EnemyPool'
import { gsap } from 'gsap'

export default {
  name: 'EnemyComponent',

  computed: {
    ...mapState('Enemy', ['name', 'hp', 'image', 'maxHp']),
    ...mapState(['stage']),
    hpPercentage() {
      return Math.floor((this.hp * 100) / this.maxHp)
    }
  },

  data() {
    return {
      dieTl: null,
      spawnTl: null,
      hitTl: null
    }
  },

  watch: {
    hp(newHp) {
      if (newHp <= 0) {
        this.$store.commit('increaseCoin')
        this.dieTl.restart()
      }
      this.hitTl.restart()
    }
  },

  mounted() {
    this.spawnTl = gsap.timeline({ paused: true }).to(this.$refs.card, {
      startAt: {
        scale: 0.0
      },
      opacity: 1.0,
      scale: 1.0,
      duration: 0.3,
      ease: 'power3.out'
    })

    this.dieTl = gsap.timeline({ paused: true }).to(this.$refs.card, {
      opacity: 0.0,
      duration: 0.3,
      ease: 'power3.out',
      onComplete: () => {
        const enemy = EnemyPool.getEnemy(this.stage)
        this.$store.dispatch('Enemy/spawn', enemy)
        this.spawnTl.restart()
      }
    })

    this.hitTl = gsap
      .timeline({ paused: true })
      .to(this.$refs.slash, {
        opacity: 0.5,
        duration: 0.1,
        ease: 'power3.out'
      })
      .to(this.$refs.slash, {
        opacity: 0.0,
        duration: 0.1,
        ease: 'power3.out'
      })

    this.spawnTl.play()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.enemy__wrapper {
  width: 100%;

  .healthpoint__wrapper {
    position: relative;
    width: 100%;
    background: $light;
    color: $dark;
    padding: 0.5rem;
    border-radius: 0.5rem;
    overflow: hidden;

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

  .enemy__card {
    position: relative;
    width: 350px;
    margin-top: 1rem;
    padding: 1rem;
    background: $light;
    border-radius: 1rem;
    overflow: hidden;

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

    .slash {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      opacity: 0;
      background: $light;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
