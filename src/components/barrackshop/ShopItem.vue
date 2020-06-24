<template>
  <div class="shop__item box" :class="{ unavailable: coin < cost }">
    <div class="shop__image box__image">
      <img :src="image" alt="name" />
    </div>
    <div class="shop__meta box__meta">
      <p>{{ name }}</p>
      <p><span class="icon coin"></span> {{ cost }}</p>
      <p><span class="mdi" :class="dmgIcon"></span> {{ dmgAmount }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ShopItem',

  props: {
    name: String,
    image: String,
    cost: Number,
    dmgAmount: Number,
    dmgType: String
  },

  computed: {
    dmgIcon() {
      if (this.dmgType === 'normal') {
        return 'mdi-sword'
      }
      return 'mdi-sword'
    },

    ...mapState(['coin'])
  }
}
</script>

<style lang="scss" scoped>
.shop__item {
  width: 128px;
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
