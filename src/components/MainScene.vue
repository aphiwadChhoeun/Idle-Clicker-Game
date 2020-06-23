<template>
  <div class="scene__container container">
    main game

    <action-panel />
  </div>
</template>

<style lang="scss" scoped>
.scene__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>

<script>
import ActionPanel from './ActionPanel'

export default {
  name: 'MainScene',

  components: {
    ActionPanel
  }
}
</script>
