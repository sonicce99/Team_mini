<template>
  <form @submit="addProduct" name="input">
  <input 
    type="text"
    v-model="title" />

  <input 
    type="text"
    v-model="price" />
  
  <input
    type="text"
    v-model="description" />

  <input
    type="text"
    v-model="tags" />

  <input
    type="text"
    v-model="thumbnailBase64" />

  <input
    type="text"
    v-model="isSoldOut" />

  <button type="submit" class="add">추가하기</button>
  </form>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      title: '',
      price: '',
      description: '',
      tags: '',
      thumbnailBase64: '',
      isSoldOut: '',

    }
  },
  methods: {
    async addProduct() {
      const { data } = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202110',
          'username': '5zo', 
          'masterKey': true
        },
        data: {
          'title': this.title,
          'price': this.price,
          'description': this.description,
          'tags': this.tags,
          'thumbnailBase64': this.thumbnailBase64,
          'isSoldOut': this.isSoldOut
        }
      })
    }
  }

}
</script>
