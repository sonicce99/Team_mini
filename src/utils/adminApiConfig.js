import axios from 'axios'

const axiosCustomSet = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products',
  headers: {
    'content-type': 'application/json',
    apikey: 'FcKdtJs202110',
    username: "5zo",
    masterKey: true
  },

})
export default axiosCustomSet
