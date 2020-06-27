<template>
  <div class="menu__container" @click="onMenuItemClicked">
    <div class="menu__image">
      <img :src="image" :alt="label" />
    </div>
    <div class="menu__meta">{{ label }}</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'MenuItem',

  props: {
    label: String,
    image: String,
    modal: String
  },

  methods: {
    onMenuItemClicked() {
      this.openModal(this.modal)
    },

    ...mapMutations('Modal', ['openModal'])
  }
}
</script>
