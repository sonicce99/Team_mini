<template>
  <div class="product-edit">
    <h1>Edit product</h1>
    <h2>{{ data }}</h2>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        data: [],
        title : '',
        price : '',
        description: '',
        tags: [],
        thumbnailBase64: '',
        photoBase64: '',
        isSoldOut: false
      }
    },
    mounted() {
      this.getProduct()
    },
    methods: {

      //상품내역 가져오기
      async getProduct(){
      const { data } = await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202110',
          'username': 'KangHaEun',
          'masterKey': true
        }
      })
      console.log(data)
      this.data = data
      }, 

      //서버에 수정한거 올리는 함수
      //* API주소에 프로덕트 아이디 나중에 수정해야함! 지금은 그냥 특정해놓음. */
      async editProduct(){
      const { data } = await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/4Init6tY3pO9dBo2BgwI`,
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202110',
          'username': 'KangHaEun',
          'masterKey': true
        },
        data: {
          title : this.title,
          price : this.price,
          description: this.description,
          tags: this.tags,
          thumbnailBase64: this.thumbnailBase64,
          photoBase64: this.photoBase64,
          isSoldOut: this.isSoldOut
        }
      })
      console.log(data)
      return data
      } 
    }
}
</script>
