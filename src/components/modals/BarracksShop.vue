<template>
  <base-modal>
    <template v-slot:header>Barracks</template>
    <template v-slot:body>
      <div class="shop__meta">
        <div class="current__coin">{{ coin }}</div>
      </div>
      <div class="shop__container">
        <shop-item
          v-for="item in items"
          :key="item.name"
          :name="item.name"
          :image="item.image"
          :damage="item.damage"
          :damage-type="item.damageType"
          :cost="item.cost"
        />
      </div>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from './BaseModal'
import ShopItem from '../barrackshop/ShopItem'
import HeroPool from '../../lib/hero/HeroPool'
import { mapState } from 'vuex'

export default {
  name: 'BarracksShop',

  components: {
    BaseModal,
    ShopItem
  },

  computed: {
    ...mapState(['coin'])
  },

  data() {
    return {
      items: HeroPool.getAllHeroes()
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/variables';

.shop__meta {
  padding: 1rem 1rem;
  width: 100%;
  box-sizing: border-box;
  background: $dark;

  .current__coin {
    box-sizing: border-box;
    display: inline-block;
    padding-top: 0.5rem;
    height: 32px;
    text-indent: 35px;
    background: url('/images/coin.webp');
    background-repeat: no-repeat;
    background-size: 32px;
  }
}
.shop__container {
  width: 100%;
  display: grid;
  margin-top: 0.5rem;
  grid-template-columns: repeat(6, 1fr);
}
</style>
