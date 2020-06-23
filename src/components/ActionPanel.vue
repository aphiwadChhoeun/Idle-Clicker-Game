<template>
  <div class="action__container">
    <action-button />
    <coin-pocket />
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.action__container {
  position: absolute;
  background: $gray;
  bottom: 0;
  width: 100vw;
  height: 20vh;
}
</style>

<script>
import ActionButton from './ActionButton'
import CoinPocket from './CoinPocket'

export default {
  name: 'ActionPanel',

  components: {
    ActionButton,
    CoinPocket
  }
}
</script>
