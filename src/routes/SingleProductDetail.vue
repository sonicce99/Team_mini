<template>
  <input 
    v-model="id"
    type="text" />
  <button @click="SingleProductDetail">단일 제품 상세 조회!</button>  
  <Loader :loading="loading" />  
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      id:"",
      loading: false
    }
  },
  methods: {
    async SingleProductDetail() {
      if(this.loading) return 
      this.loading = true
      try {
        const res = await axios({
          url:`https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${this.id}`,
          method: "GET",
          headers: {
            "content-type": "application/json",
            "apikey": "FcKdtJs202110",
            "username": "dongsu"
          }
        })
        console.log(res.data)
      } catch (error) {
        console.log(error.response.data)
      } finally {
        this.loading = false
      }
    }
  }  
}
</script>