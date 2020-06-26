<template>
  <div class="scene__container">
    <scene-layout />
    <action-panel />
  </div>
</template>

<style lang="scss" scoped>
.scene__container {
  display: block;
  padding: 4rem 0;
  overflow-y: scroll;
  max-height: 80vh;
}
</style>

<script>
import SceneLayout from './SceneLayout'
import ActionPanel from './ActionPanel'

export default {
  name: 'MainScene',

  components: {
    SceneLayout,
    ActionPanel
  }
}
</script>
