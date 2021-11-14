import { axiosAuthInit, axiosAuth } from '~/utils/authenticationApiConfig'
import { axiosAccount } from '~/utils/accountApiConfig'
import { axiosUserProduct, axiosAdminProduct, axiosPublicProduct } from '~/utils/productApiConfig'
import router from '../routes'


export default {
  namespaced: true,
  state: () => ({
    allProducts: [],
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
    }
  },
  actions: {
    async getAllProducts({ commit }, tags = []) {
      const { data } = await axiosAdminProduct.get()
      if (tags.length) {
        const allProducts = data.filter(item => item.tags.filter(tag => tags.includes(tag)).length)
        commit('assignState', { allProducts })
      } else {
        commit('assignState', { allProducts: data })
      }
    },
    async getPurchaseList({ commit }) {
      const { data : purchaseList } = await axiosUserProduct.get('transactions/details')
      commit('assignState',{ purchaseList })
    }
  }
}
