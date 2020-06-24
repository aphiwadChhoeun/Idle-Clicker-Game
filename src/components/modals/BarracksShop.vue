<template>
  <base-modal>
    <template v-slot:header>
      Barracks
    </template>
    <template v-slot:body>
      <div class="shop__container">
        <shop-item
          v-for="item in items"
          :key="item.name"
          :name="item.name"
          :image="item.image"
          :dmg-amount="item.dmgAmount"
          :dmg-type="item.dmgType"
          :cost="item.cost"
        />
      </div>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from './BaseModal'
import ShopItem from '../barrackshop/ShopItem'

export default {
  name: 'BarracksShop',

  components: {
    BaseModal,
    ShopItem
  },

  data() {
    return {
      items: [
        {
          name: 'Soldier',
          image: '/images/soldier_avatar.webp',
          dmgAmount: 1,
          dmgType: 'normal',
          cost: 20
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.shop__container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>
