<template>
  <div class="icon__container box" @click="openModal('SettingsModal')">
    <div class="icon__image box__image">
      <img src="/images/settings.webp" alt="Settings" />
    </div>
    <div class="icon__meta box__meta">Settings</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'SettingsIcon',

  methods: {
    ...mapMutations('Modal', ['openModal'])
  }
}
</script>

<style lang="scss" scoped></style>
