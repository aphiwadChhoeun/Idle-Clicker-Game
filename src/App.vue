<template>
  <div id="app">
    <main-header />
    <main-scene />
    <component :is="modal" v-if="open" />
  </div>
</template>

<script>
/* eslint 'no-unused-vars': 'off' */
import MainHeader from './components/MainHeader'
import MainScene from './components/MainScene'
import BarracksShop from './components/modals/BarracksShop'
import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
    MainHeader,
    MainScene,
    BarracksShop
  },

  computed: mapState('Modal', ['open', 'modal'])
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
