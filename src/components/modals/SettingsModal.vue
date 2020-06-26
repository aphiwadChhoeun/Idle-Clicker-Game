<template>
  <base-modal>
    <template v-slot:header>Settings</template>
    <template v-slot:body>
      <div class="settings__body__container">
        <slider-control
          label="Music"
          :value="musicVolume"
          min="0"
          max="100"
          v-on:input="onMusicChanged"
        />
      </div>
    </template>
  </base-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BaseModal from './BaseModal'
import SliderControl from './settings/SliderControl'

export default {
  name: 'SettingsModal',

  components: {
    BaseModal,
    SliderControl
  },

  computed: {
    ...mapState('Settings', {
      musicVolume: state => state.musicVolume * 100
    })
  },

  methods: {
    onMusicChanged(val) {
      this.setMusicVolume(val / 100)
    },

    ...mapMutations('Settings', ['setMusicVolume'])
  }
}
</script>

<style lang="scss">
.settings__body__container {
  width: 100%;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
}
</style>
