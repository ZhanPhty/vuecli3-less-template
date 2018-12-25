import Vue from 'vue'
import Vuex from 'vuex'

// 引入modules
import demo from './demo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    demo
  }
})
