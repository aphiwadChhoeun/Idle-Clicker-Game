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

        <div class="debug__container">
          <div>Debug only</div>
          <div class="debug__clear__save">
            <button class="button is-primary" @click="resetGame">
              !!Reset game!!
            </button>
          </div>
        </div>
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
    // DELETE LATER
    resetGame() {
      this.$swal({
        icon: 'warning',
        title: 'This will reset your game!!!',
        showCancelButton: true,
        confirmButtonColor: '#e7305b',
        cancelButtonColor: '#0fabbc',
        confirmButtonText: 'Yes, reset it!'
      }).then(result => {
        if (result.value) {
          localStorage.removeItem('ClickerGame')
          window.location.reload()
        }
      })
    },

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

  // DELETE LATER
  .debug__container {
    margin: 2rem;
  }
}
</style>
