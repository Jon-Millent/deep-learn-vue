
import Vue from 'vue'
import Vuex from 'vuex'
import appleStore from './mdoel/apple'
import microsoftStore from './mdoel/microsoft'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appleStore,
    microsoftStore
  }
})
