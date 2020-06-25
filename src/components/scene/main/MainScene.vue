<template>
  <div class="scene__container">
    <scene-layout />
    <action-panel />
  </div>
</template>

<style lang="scss" scoped>
.scene__container {
  display: block;
  margin-top: 4rem;
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
