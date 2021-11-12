import axiosAdmin from '~/utils/adminApiConfig'
import { logOut, purchaseDetail } from '~/utils/userApiConfig'

export default {
  namespaced: true,
  state: () => ({
    purchaseList: [{ "detailId": "GMuTk7BhycEA1Q1gpGeB", "product": { "productId": "WeQ72b0t0LPwd2rC4dot", "title": "mac book", "price": 34344, "description": "good", "tags": [ "apple", "notebook" ], "thumbnail": null }, "reservation": null, "timePaid": "2021-11-12T04:02:41.666Z", "isCanceled": false, "done": false }],
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
