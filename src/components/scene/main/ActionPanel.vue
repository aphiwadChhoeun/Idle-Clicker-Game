<template>
  <div class="action__container">
    <div class="action__wrapper">
      <coin-pocket />
      <menu-item
        v-for="item in menuItems"
        :key="item.label"
        :label="item.label"
        :image="item.image"
        :modal="item.modal"
      />
    </div>
    <action-button />
  </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/styles/variables';

.action__container {
  position: fixed;
  bottom: 0;
  display: block;
  background: $gray;
  width: 100%;
  height: 20vh;
  box-shadow: 0 -15px 5px rgba(0, 0, 0, 0.1);

  .action__wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
import ActionButton from './ActionButton'
import CoinPocket from './CoinPocket'
import MenuItem from './MenuItem'

export default {
  name: 'ActionPanel',

  components: {
    ActionButton,
    CoinPocket,
    MenuItem
  },

  data() {
    return {
      menuItems: [
        {
          label: 'Barracks',
          image: '/images/barracks.webp',
          modal: 'BarracksShop'
        },
        {
          label: 'Upgrade',
          image: '/images/upgrade.webp',
          modal: 'UpgradeShop'
        },
        {
          label: 'Settings',
          image: '/images/settings.webp',
          modal: 'SettingsModal'
        }
      ]
    }
  }
}
</script>
