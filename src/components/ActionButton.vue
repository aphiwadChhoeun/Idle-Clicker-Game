<template>
  <div>
    <button id="btn-action" class="button is-round">Attack</button>
  </div>
</template>

<script>
export default {
  name: 'ActionButton'
}
</script>

<style lang="scss">
#btn-action {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
