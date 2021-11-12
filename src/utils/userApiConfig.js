import axios from 'axios'

const token = sessionStorage.getItem('accessToken')

export const logOut = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout',
  headers: {
    'content-type': 'application/json',
    apikey: 'FcKdtJs202110',
    username: "5zo",
    authorization: `Bearer ${token}`
  }
})

export const purchaseDetail = axios.create({
  baseURL: 'ttps://asia-northeast3-heropy-api.cloudfunctions.net/api/products/ok',
  headers: {
    'content-type': 'application/json',
    apikey: 'FcKdtJs202110',
    username: "5zo",
    authorization: `Bearer ${token}`
  }
})

export const cancelPurchase = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/cancel',
  headers: {
    'content-type': 'application/json',
    apikey: 'FcKdtJs202110',
    username: "5zo",
    authorization: `Bearer ${token}`
  }
})

export const confirmPurchase = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/ok',
  headers: {
    'content-type': 'application/json',
    apikey: 'FcKdtJs202110',
    username: "5zo",
    authorization: `Bearer ${token}`
  }
})
