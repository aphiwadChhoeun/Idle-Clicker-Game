<template>
  <base-modal>
    <template v-slot:header>Barracks</template>
    <template v-slot:body>
      <div class="shop__inventory">
        <div class="current__coin">{{ coin }}</div>
      </div>
      <div class="shop__container">
        <shop-item
          v-for="item in items"
          :key="item.name"
          :id="item.id"
          :name="item.name"
          :avatar="item.avatar"
          :damage="item.damage"
          :damage-type="item.damageType"
          :cost="item.cost"
          v-on:buy-done="onBoughtItem"
        />
      </div>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from './BaseModal'
import ShopItem from './barrackshop/ShopItem'
import HeroPool from '../../lib/hero/HeroPool'
import { mapState, mapMutations, mapActions } from 'vuex'

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
  },

  methods: {
    onBoughtItem(heroId) {
      const hero = HeroPool.getHero(heroId)
      if (hero) {
        this.buyHero(hero)
          .then(() => {
            this.decreaseCoin(hero.cost)
          })
          .catch(error =>
            this.$swal({
              icon: 'error',
              title: error.message
            })
          )
      }
    },

    ...mapMutations(['decreaseCoin']),
    ...mapActions('Hero', ['buyHero'])
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/variables';

.shop__inventory {
  padding: 1rem 1rem;
  width: 100%;
  background: $dark;

  .current__coin {
    display: inline-block;
    height: 32px;
    text-indent: 35px;
    background: url('/images/coin.webp');
    background-repeat: no-repeat;
    background-size: 32px;
    font-size: 2rem;
  }
}
.shop__container {
  width: 100%;
  display: grid;
  margin-top: 0.5rem;
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  grid-gap: 0.5rem;
}
</style>
