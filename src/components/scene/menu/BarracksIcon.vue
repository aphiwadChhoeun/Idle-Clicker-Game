<template>
  <div class="icon__container box" @click="openModal('BarracksShop')">
    <div class="icon__image box__image">
      <img src="/images/barracks.webp" alt="Barracks" />
    </div>
    <div class="icon__meta box__meta">Barracks</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'BarracksIcon',

  methods: {
    ...mapMutations('Modal', ['openModal'])
  }
}
</script>

<style lang="scss"></style>
