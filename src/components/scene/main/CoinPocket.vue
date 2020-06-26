<template>
  <div class="coin__pocket box is-light">
    <div class="coin__image" ref="coin">
      <img src="/images/coin.webp" alt="Coin Pocket" />
    </div>
    <div class="box__meta coin__meta">{{ coin }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { gsap } from 'gsap'
import { playCoin, playBuy } from '../../../lib/sound/SoundPool'

export default {
  name: 'CoinPocket',

  computed: mapState({
    coin: state => state.coin
  }),

  watch: {
    coin(newVal, oldVal) {
      // earning
      if (oldVal < newVal) {
        this.earnTl.restart()
        playCoin()
      } else if (oldVal > newVal) {
        playBuy()
      }
    }
  },

  data() {
    return {
      earnTl: null
    }
  },

  mounted() {
    this.earnTl = gsap
      .timeline({ paused: true })
      .to(this.$refs.coin, {
        y: -50,
        scale: 1.5,
        duration: 0.3,
        ease: 'power3.out'
      })
      .to(this.$refs.coin, {
        y: 0,
        scale: 1.0,
        duration: 0.3,
        ease: 'power3.out'
      })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/variables';

$boxSize: 18vh;

.coin__pocket {
  width: $boxSize;
  height: $boxSize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: $light;

  .coin__image {
    width: 70%;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }

  .coin__meta {
    font-size: 1.5rem;
  }
}
</style>
