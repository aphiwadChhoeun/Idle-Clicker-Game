<template>
  <div class="scene__layout">
    <div class="hero__container">
      <hero-component />
    </div>
    <div class="enemy__container">
      <enemy-component />
    </div>
  </div>
</template>

<script>
import HeroComponent from '../../hero/HeroComponent'
import EnemyComponent from '../../enemy/EnemyComponent'

export default {
  name: 'SceneLayout',

  components: {
    HeroComponent,
    EnemyComponent
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/variables';

.scene__layout {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 2rem;

  .hero__container {
    padding: 0.5rem;
    flex: 2;
  }

  .enemy__container {
    flex: 1;
  }
}
</style>
