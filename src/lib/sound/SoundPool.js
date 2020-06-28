/* eslint 'no-unused-vars': 'off' */
import { Howl } from 'howler'
import { getRandomInt } from '../helpers'

// theme music
const themeMusic = new Howl({
  src: ['/sounds/theme.wav'],
  loop: true,
  volume: 0.4
})
export const themeMusicSettings = themeMusic
export const playThemeMusic = (options = {}) => {
  if (options.volume >= 0) {
    themeMusic.volume(options.volume)
  }
  themeMusic.play()
}

// swishing effect
const swishVolume = 0.4
const swishPool = [
  new Howl({ src: ['/sounds/swish_1.wav'], volume: swishVolume }),
  new Howl({ src: ['/sounds/swish_2.wav'], volume: swishVolume }),
  new Howl({ src: ['/sounds/swish_3.wav'], volume: swishVolume })
]
export const playSwish = () => {
  const swish = swishPool[getRandomInt(0, 3)]
  swish.play()
}

// coin effect
const coinVolume = 0.2
const coinSound = new Howl({ src: ['/sounds/coin.wav'], volume: coinVolume })
export const playCoin = () => {
  coinSound.play()
}

// buy effect
const buyVolume = 0.2
const buySound = new Howl({ src: ['/sounds/buy.ogg'], volume: buyVolume })
export const playBuy = () => {
  buySound.play()
}
