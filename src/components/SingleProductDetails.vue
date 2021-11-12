<template>
  <button @click="SingleProductDetails">제품 상세 보기!</button>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    async SingleProductDetails() {
      try {
        const res = await axios({
          url:`https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${this.$route.params.id}`,
          method: "GET",
          headers: {
            "content-type": "application/json",
            "apikey": "FcKdtJs202110",
            "username": "5zo"
          }
        })
        console.log(res.data)
      } catch (error) {
        console.log(error.response.data)
      } 
    }
  }  
}
</script>
