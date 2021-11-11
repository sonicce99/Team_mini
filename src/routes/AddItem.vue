<template>
  <input type="text" v-model="title" />
  <input type="text" v-model="price" />
  <input type="text" v-model="description" />
  <input type="text" v-model="tags" />     
  <button @click="addItem">제품 추가!</button> 
</template>

<script>
import axios from 'axios'

export default {
  data() { 
    return {
      title:"",
      price:"",
      description:"",
      tags:"",                  
      loading: false
    }
  },
  methods: {
    async addItem() {
      if(this.loading) return 
      this.loading = true
      try {
        const res = await axios({
          url:"https://asia-northeast3-heropy-api.cloudfunctions.net/api/products",
          method: "POST",
          headers: {
            "content-type": "application/json",
            "apikey": "FcKdtJs202110",
            "username": "dongsu",
            "masterKey": "true"
          },
          data: {
            "title":this.title,
            "price":this.price,
            "description":this.description,
            "tags":this.tags                 
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