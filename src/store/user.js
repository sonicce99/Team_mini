import axiosAdmin from '~/utils/adminApiConfig'
import { logOut, purchaseDetail } from '~/utils/userApiConfig'

export default {
  namespaced: true,
  state: () => ({
    purchaseList: [],
    allProducts: [],
    salesDetails: []
  }),
  getters:{
    tagSet(state) {
      const tagsRaw = []
      state.allProducts.forEach(data => {
        tagsRaw.push(...data.tags)
      })
      return [... new Set(tagsRaw)]
    }
  },
  mutations: {
    SET_SALESDETAILS(state, salesDetails){
      state.salesDetails = salesDetails
    },
    assignState(state,payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    async SHOW_SALESDETAILS({commit}){
      return await axiosAdmin.get('/transactions/all').then(data => {
        commit('SET_SALESDETAILS')
      })
    },
    async getAllProducts({ commit }, tags = []) {
      const { data } = await axiosAdmin.get()
      if (tags.length) {
        const allProducts = data.filter(item => item.tags.filter(tag => tags.includes(tag)).length)
        commit('assignState', { allProducts })
      } else {
        commit('assignState', { allProducts: data })
      }
    },
    async logOut() {
      await logOut.post()
    },
    async getPurchaseList({ commit }) {
      const { data : purchaseList } = await purchaseDetail.get()
      commit('assignState',{ purchaseList })
    }
  }
}
