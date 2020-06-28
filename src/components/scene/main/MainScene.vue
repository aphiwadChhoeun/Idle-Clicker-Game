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
