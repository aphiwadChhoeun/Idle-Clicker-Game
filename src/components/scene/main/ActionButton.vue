<template>
  <div>
    <button
      id="btn-action"
      class="button is-primary is-round"
      @click="onAttack"
    >
      <div>Attack</div>
      <div><span class="mdi mdi-sword"></span>{{ damage }}</div>
    </button>
  </div>
</template>

<script>
import { playSwish } from '../../../lib/sound/SoundPool'
import { mapState } from 'vuex'

export default {
  name: 'ActionButton',

  computed: {
    ...mapState(['damage'])
  },

  methods: {
    onAttack() {
      this.$store.dispatch('attack')
      playSwish()
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/styles/variables';

#btn-action {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 5px -15px 5px rgba(0, 0, 0, 0.1);

  &:active {
    box-shadow: 5px -5px 5px rgba(0, 0, 0, 0.1), inset 0 0 25px $dark;
  }

  div {
    font-family: $altFont;
    color: $dark;

    span {
      color: $dark;
    }
  }
}
</style>
