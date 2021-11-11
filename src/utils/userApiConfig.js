import axios from 'axios'

const token = sessionStorage.getItem('accessToken')

export const logOut = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout',
  headers: {
    'content-type': 'application/json',
    apikey: 'FcKdtJs202110',
    username: "5zo",
    authorization: `Bearer ${token}`
  },
})