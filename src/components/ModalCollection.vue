<template>
  <div>
    <component :is="modal" v-if="open" />
  </div>
</template>

<script>
import BarracksShop from './modals/BarracksShop'
import SettingsModal from './modals/SettingsModal'
import { mapState } from 'vuex'

export default {
  name: 'ModalCollection',

  components: {
    BarracksShop,
    SettingsModal
  },

  computed: mapState('Modal', ['open', 'modal'])
}
</script>

<style></style>
