<template>
  <div class="shop__item box" :class="{ unavailable: !canBuy }" @click="buy">
    <div class="shop__image box__image">
      <img :src="image" :alt="name" width="108" height="108" />
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
    image: String,
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

    ...mapState(['coin'])
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
.shop__item {
  width: 128px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;

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
}
</style>
