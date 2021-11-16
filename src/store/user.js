import { axiosAuthInit, axiosAuth } from '~/utils/authenticationApiConfig'
import router from '~/routes'
import { axiosAccount } from '~/utils/accountApiConfig'
import {
  axiosUserProduct,
  axiosAdminProduct,
  axiosPublicProduct,
} from '~/utils/productApiConfig'

import { gucciImage } from '../utils/gucciImage'
import { valentinoImage } from '../utils/valentinoImage'
import { louboutinImage } from '../utils/louboutinImage'
import { votegaImage } from '../utils/votegaImage'
import { theRowImage } from '../utils/theRowImage'

export default {
  namespaced: true,
  state: () => ({
    purchaseList: [],
    keywordList: [
      {
        name: 'GUCCI',
        image: gucciImage,
      },
      {
        name: 'THE ROW',
        image: theRowImage,
      },
      {
        name: 'CHRISTIAN LOUBOUTIN',
        image: louboutinImage,
      },
      {
        name: 'Bottega Veneta',
        image: votegaImage,
      },
      {
        name: 'Valentino Garavani',
        image: valentinoImage,
      },
    ],
    searchResults: [],
    currentUser: null,
  }),
  getters: {
    // 구매 신청 내역 취소한 내용만 보기
    purchaseOnlyCanceled(state) {
      return state.purchaseList.filter((purchase) => purchase.isCanceled)
    },
    // 구매 완결난 내역만 보기
    purchaseOnlyDone(state) {
      return state.purchaseList.filter((purchase) => purchase.done)
    },
    purchaseOnlyRequested(state) {
      return state.purchaseList.filter((purchase) => !purchase.done && !purchase.isCanceled)
    },
  },
  // state에 있는 salesDetails에 data를 받아서 넣어줌
  mutations: {

    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key]
      })
    },
    SET_SEARCHRESULTS(state, searchResults) {
      state.searchResults = searchResults
    },
  },
  actions: {
    // 로그인
    async LOGIN({ commit }, payload) {
      const { email, password } = payload
      const { data } = await axiosAuthInit.post('login', { email, password })
      // access token 유지
      await sessionStorage.setItem('token', data.accessToken)
      await router.push('/')
      router.go()
      return data
    },
    async UPDATE_USERINFO({ commit }, payload) {
      const { displayName, oldPassword, newPassword, profileImgBase64 } =
        payload
      const { data } = axiosAuth.put('user', {
        displayName,
        oldPassword,
        newPassword,
        profileImgBase64,
      })
      return data
    },
    // 제품 검색 결과 보기
    async SHOW_SEARCHRESULTS({ commit }, payload) {
      const { searchText, searchTags } = payload
      const { data } = await axiosPublicProduct.post('search', {
        searchText,
        searchTags,
      })
      commit('SET_SEARCHRESULTS', data)
      return data
    },

    // 구매 확정
    async CONFIRM_PURCHASE({ commit }, payload) {
      await axiosUserProduct.post('ok', payload)
    },
    // 구매 취소
    async CANCEL_PURCHASE({ commit }, payload) {
      await axiosUserProduct.post('cancel', payload)
    },
    async logOut() {
      await axiosAuth.post('logout')
      router.go()
    },
    async getPurchaseList({ commit }) {
      const { data: purchaseList } = await axiosUserProduct.get(
        'transactions/details'
      )
      commit('assignState', { purchaseList })
    },
  },
}
