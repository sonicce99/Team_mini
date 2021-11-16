import { axiosAuthInit, axiosAuth } from '~/utils/authenticationApiConfig'
import { axiosAccount } from '~/utils/accountApiConfig'
import { axiosUserProduct, axiosAdminProduct, axiosPublicProduct } from '~/utils/productApiConfig'
import router from '../routes'


export default {
  namespaced: true,
  state: () => ({
    allProducts: [],
    allSellList: [],
    seletedProducts: []
  }),
  getters:{
    // 제품의 전체 태그 보여주기
    tagSet(state) {
      const tagsRaw = []
      state.allProducts.forEach(data => {
        tagsRaw.push(...data.tags)
      })
      return [... new Set(tagsRaw)]
    },
  },
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    addState(state, payload) {
      state.allProducts.push(payload)
    }
  },
  actions: {
    async getAllProducts({ commit }) {
      const { data } = await axiosAdminProduct.get()
      commit('assignState', { allProducts: data })
    },
    async getSelectedProducts({ commit }, tags = []) {
      const { data } = await axiosAdminProduct.get()
      const seletedProducts = data.filter(item => item.tags.filter(tag => tags.includes(tag)).length)
      commit('assignState', { seletedProducts })
    },
    async addProduct({commit}, obj) {
      const { data } = await axiosAdminProduct.post('', obj)
      commit('addState', data)
    },
    async getAllSellList({ commit }) {
      const { data } = await axiosAdminProduct.get('transactions/all')
      commit('assignState', { allSellList: data })
    }
  }
}
