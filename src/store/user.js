import { logOut } from '~/utils/userApiConfig'
import { axiosUserProduct, axiosAdminProduct, axiosPublicProduct } from '~/utils/productApiConfig'


export default {
  namespaced: true,
  state: () => ({
    purchaseList: [],
    allProducts: [],
    salesDetails: []
  }),
  getters:{
    // (관리자) 전 제품의 테그 set 
    tagSet(state) {
      const tagsRaw = []
      state.allProducts.forEach(data => {
        tagsRaw.push(...data.tags)
      })
      return [... new Set(tagsRaw)]
    },
    // 구매 신청 내역 취소한 내용만 보기
    purchaseOnlyCanceled(state) {
      return state.purchaseList.filter( purchase => purchase.isCanceled)
    },
    // 구매 완결난 내역만 보기
    purchaseOnlyDone(state) {
      return state.purchaseList.filter( purchase => purchase.done)
    },
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
      return await axiosAdminProduct.get('transactions/all').then(data => {
        commit('SET_SALESDETAILS')
      })
    },
    async CONFIRM_PURCHASE({commit}, payload){
      const { detailId } = payload
      return await axiosUserProduct.post('ok',{ detailId })
    },
    async CANCEL_PURCHASE({commit}, payload){
      const { detailId } = payload
      return await axiosUserProduct.post('cancel',{ detailId })
    },
    async getAllProducts({ commit }, tags = []) {
      const { data } = await axiosAdminProduct.get()
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
      const { data : purchaseList } = await axiosUserProduct.get('transactions/details')
      commit('assignState',{ purchaseList })
    }
  }
}
