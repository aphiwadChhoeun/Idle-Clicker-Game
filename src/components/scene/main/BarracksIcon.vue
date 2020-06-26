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

<style lang="scss">
@import '../../../assets/styles/variables';

$iconSize: 18vh;

.icon__container {
  width: $iconSize;
  height: $iconSize;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    filter: contrast(1.5);
  }

  &:active {
    box-shadow: inset 0 0 15px $dark;
  }

  .icon__image {
    width: 70%;

    img {
      width: 100%;
      height: auto;
    }
  }

  .icon__meta {
    font-size: 1rem;
  }
}
</style>
