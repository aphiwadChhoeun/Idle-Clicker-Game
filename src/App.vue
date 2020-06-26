<template>
  <div id="app">
    <main-header />
    <main-scene />
    <modal-collection />
  </div>
</template>

<script>
/* eslint 'no-unused-vars': 'off' */
import MainHeader from './components/MainHeader'
import MainScene from './components/scene/main/MainScene'
import ModalCollection from './components/ModalCollection'

export default {
  name: 'App',

  components: {
    MainHeader,
    MainScene,
    ModalCollection
  }
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';

#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
