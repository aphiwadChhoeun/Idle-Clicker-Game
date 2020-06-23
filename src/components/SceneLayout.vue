<template>
  <div class="scene__layout">
    <div class="allies__container">allies</div>
    <div class="enemy__container">
      <enemy-component />
    </div>
  </div>
</template>

<script>
import EnemyComponent from './EnemyComponent'

export default {
  name: 'SceneLayout',

  components: {
    EnemyComponent
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.scene__layout {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 4rem;
  display: flex;
  justify-content: center;

  .allies__container {
    width: 50%;
  }

  .enemy__container {
    width: 50%;
  }
}
</style>
