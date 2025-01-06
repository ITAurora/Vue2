import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftMenu:false,
  },
  getters: {
  },
  mutations: {
    leftMenuActive(state){
      state.leftMenu=!state.leftMenu
    },
  },
  actions: {
  },
  modules: {
  }
})
