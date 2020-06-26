import { themeMusicSettings } from '../../lib/sound/SoundPool'

export default {
  namespaced: true,
  state: () => ({
    musicVolume: 0.5
  }),
  mutations: {
    setMusicVolume: (state, volume) => {
      state.musicVolume = volume
      themeMusicSettings.volume(state.musicVolume)
    }
  }
}
