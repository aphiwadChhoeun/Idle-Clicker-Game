import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import { playThemeMusic } from './lib/sound/SoundPool'
import vueNumeralFilterInstaller from 'vue-numeral-filter'

Vue.config.productionTip = false

Vue.use(VueSweetalert2)
Vue.use(vueNumeralFilterInstaller, { locale: 'en-gb' })

new Vue({
  store,
  render: h => h(App),

  beforeCreate() {
    this.$store.dispatch('initStore')
  },

  created() {
    playThemeMusic({
      volume: this.$store.state.Settings.musicVolume
    })
  }
}).$mount('#app')
