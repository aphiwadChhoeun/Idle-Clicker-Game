import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import EnemyPool from './lib/enemy/EnemyPool'
import { playThemeMusic } from './lib/sound/SoundPool'
import vueNumeralFilterInstaller from 'vue-numeral-filter'

Vue.config.productionTip = false

Vue.use(VueSweetalert2)
Vue.use(vueNumeralFilterInstaller, { locale: 'en-gb' })

new Vue({
  store,
  render: h => h(App),
  created() {
    const enemy = EnemyPool.getEnemy(this.$store.state.stage)
    this.$store.dispatch('Enemy/spawn', enemy)

    playThemeMusic()
  }
}).$mount('#app')
