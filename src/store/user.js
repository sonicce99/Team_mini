import { axiosAuthInit, axiosAuth } from '~/utils/authenticationApiConfig'
import router from '../routes'
import { axiosAccount } from '~/utils/accountApiConfig'
import { axiosUserProduct, axiosAdminProduct, axiosPublicProduct } from '~/utils/productApiConfig'


export default {
  namespaced: true,
  state: () => ({
    purchaseList: [],
    allProducts: [],
    salesDetails: [],
    currentUser: null
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
  // state에 있는 salesDetails에 data를 받아서 넣어줌
  mutations: {
    SET_SALESDETAILS(state, salesDetails){
      state.salesDetails = salesDetails
    },
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    // 로그인 
    async LOGIN({ commit }, payload) {
      const { email, password } = payload
      const { data } = await axiosAuthInit.post('login', { email, password })
      // access token 유지
      sessionStorage.setItem('token', data.accessToken)
      router.push('/')
      return data
    },
    // 받아온 salesDetails를 활용하여 판매 내역 보기
    async SHOW_SALESDETAILS({commit}){
      const { data } =  await axiosAdminProduct.get('transactions/all')
      await  commit('SET_SALESDETAILS')
      return data
    },
    // 구매 확정
    async CONFIRM_PURCHASE({commit}, payload){
      const { detailId } = payload
      return await axiosUserProduct.post('ok',{ detailId })
    },
    // 구매 취소
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
      return await axiosAuthInit.post('logout')
    },
    async getPurchaseList({ commit }) {
      const { data : purchaseList } = await axiosUserProduct.get('transactions/details')
      commit('assignState',{ purchaseList })
    }
  }
}
