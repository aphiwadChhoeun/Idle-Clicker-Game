<template>
  <div class="coin__pocket">
    <div class="coin__image">
      <img src="/images/coin.webp" alt="Coin Pocket" />
    </div>
    <div class="coin__meta">0</div>
  </div>
</template>

<script>
export default {
  name: 'CoinPocket'
}
</script>

<style lang="scss" scoped>
.coin__pocket {
  padding: 0 0.5rem;
  width: 7rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .coin__image {
    width: 5rem;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }

  .coin__meta {
    text-align: center;
    font-size: 1.5rem;
  }
}
</style>
