<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="title">Idle Clicker Game</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.header {
  background: $dark;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  .header__wrapper {
    width: 80vw;
    padding: 1rem 0 0.5rem;
    margin: 0 auto;

    .title {
      font-size: 2rem;
    }
  }
}
</style>
