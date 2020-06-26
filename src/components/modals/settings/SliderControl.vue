<template>
  <div class="slider__container">
    <div class="slider__label">{{ label }}</div>
    <div class="slider__input">
      <input
        type="range"
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderControl',

  props: {
    label: String,
    value: Number
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/variables';

.slider__container {
  width: 100%;
  display: flex;
  flex-direction: column;

  .slider__label {
    font-size: 2rem;
    font-weight: bold;
  }

  .slider__input {
    width: 100%;

    input {
      -webkit-appearance: none;
      width: 100%;
      outline: none;
      height: 2rem;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 2rem;
        height: 2.5rem;
        background: $primary;
        cursor: pointer;
      }
    }
  }
}
</style>
