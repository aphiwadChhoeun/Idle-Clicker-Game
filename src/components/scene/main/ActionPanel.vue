<template>
  <div class="action__container">
    <div class="action__wrapper">
      <coin-pocket />
      <barracks-icon />
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
import BarracksIcon from './BarracksIcon'

export default {
  name: 'ActionPanel',

  components: {
    ActionButton,
    CoinPocket,
    BarracksIcon
  }
}
</script>
