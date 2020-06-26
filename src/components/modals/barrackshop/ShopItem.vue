<template>
  <div
    class="shop__item box"
    :class="{ unavailable: !canBuy, recruited: recruited }"
    @click="buy"
  >
    <div class="shop__image box__image">
      <img :src="avatar" :alt="name" width="108" height="108" />
    </div>
    <div class="shop__meta box__meta">
      <p>{{ name }}</p>
      <p><span class="icon coin"></span> {{ cost }}</p>
      <p><span class="mdi" :class="damageIcon"></span> {{ damage }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ShopItem',

  props: {
    id: String,
    name: String,
    avatar: String,
    cost: Number,
    damage: Number,
    damageType: String
  },

  computed: {
    damageIcon() {
      if (this.damageType === 'normal') {
        return 'mdi-sword'
      }
      return 'mdi-sword'
    },

    canBuy() {
      return this.coin >= this.cost
    },

    recruited() {
      const foundIndex = this.heroes.findIndex(el => el.id === this.id)
      return foundIndex > -1
    },

    ...mapState(['coin']),
    ...mapState('Hero', ['heroes'])
  },

  methods: {
    buy() {
      if (this.canBuy) {
        this.$emit('buy-done', this.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/variables';

.shop__item {
  width: 128px;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    filter: contrast(1.5);
  }

  .shop__meta {
    text-align: left;
    font-size: 1rem;

    p {
      padding: 0;
      margin: 0;
    }
  }

  &.unavailable {
    filter: grayscale(1);
  }

  &.recruited {
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: $light;
      opacity: 0.2;
    }

    &:after {
      content: 'Recruited';
      font-family: $altFont;
      font-size: 1.8rem;
      position: absolute;
      left: 50%;
      top: 25%;
      transform: translateX(-50%) rotate(-45deg);
      color: $dark;
    }
  }
}
</style>
