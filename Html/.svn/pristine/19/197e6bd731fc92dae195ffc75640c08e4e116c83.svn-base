import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import index from './modules/index'
import user from './modules/user'




Vue.use(Vuex)

const state = {
    isLoading: false,
    direction: 'forward',
}
export default new Vuex.Store({
    state,
    mutations: {
      UPDATE_LOADING(state, status) {
          state.isLoading = status
      },
      UPDATE_DIRECTION(state, direction) {
          state.direction = direction
      }
    },
    modules: {
      user:user,
      product: product,
      index: index
    }
})
