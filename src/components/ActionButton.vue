<template>
  <div>
    <button id="btn-action" class="button is-round" @click="onAttack">
      Attack
    </button>
  </div>
</template>

<script>
export default {
  name: 'ActionButton',

  methods: {
    onAttack() {
      this.$store.dispatch('attack')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/variables';

#btn-action {
  font-family: $altFont;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
