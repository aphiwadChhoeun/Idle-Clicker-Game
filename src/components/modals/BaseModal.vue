<template>
  <div class="modal__wrapper">
    <div class="modal__backdrop" @click="closeModal"></div>
    <div class="modal__container">
      <div class="modal__header">
        <slot name="header"></slot>
      </div>
      <div class="modal__body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'BaseModal',

  methods: {
    ...mapMutations('Modal', ['closeModal'])
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.modal__wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .modal__backdrop {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $dark;
    opacity: 0.8;
  }

  .modal__container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: $gray;
    border-radius: 1rem;
    padding: 0.5rem;
    box-sizing: border-box;

    .modal__header,
    .modal__body {
      font-family: $altFont;
      color: $light;
      box-sizing: border-box;
    }

    .modal__header {
      padding: 1rem;
      width: 100%;
      font-size: 2rem;
      text-align: center;
    }
  }
}
</style>
