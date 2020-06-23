<template>
  <div id="app">
    <main-header />
    <main-scene />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader'
import MainScene from './components/MainScene'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainScene
  }
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
