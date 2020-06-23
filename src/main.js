import Vue from 'vue'
import App from './App.vue'
import store from './store'
import EnemyPool from './lib/EnemyPool'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  created() {
    const enemy = EnemyPool.getEnemy(0)
    this.$store.dispatch('init', enemy)
  }
}).$mount('#app')
