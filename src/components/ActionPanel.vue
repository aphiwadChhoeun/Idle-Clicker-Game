<template>
  <div class="action__container">
    <action-button />
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.action__container {
  position: absolute;
  background: $gray;
  bottom: 0;
  width: 100vw;
  height: 30vh;
}
</style>

<script>
import ActionButton from './ActionButton'

export default {
  name: 'ActionPanel',

  components: {
    ActionButton
  }
}
</script>
