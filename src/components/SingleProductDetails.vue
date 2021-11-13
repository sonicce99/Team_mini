<template>
  <div class="black-bg" v-if="ModalOpened === true">
    <div class="white-bg">
      <h4>단일 제품 상세 조회 내역</h4>
      <p>{{ SingleProductDetail }}</p>
    </div>
  </div>


</template>

<script>
import { axiosPublicProduct } from '~/utils/productApiConfig'

export default {
  mounted() {
    this.SingleProductDetails()
  },
  data() {
    return {
      SingleProductDetail:{},
      ModalOpened: false
    }
  },
  methods: {
    async SingleProductDetails() {
      try {
        const { data } = await axiosPublicProduct.get(`${this.$route.params.id}`)
        // const res = await axios({
        //   url:`https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${this.$route.params.id}`,
        //   method: "GET",
        //   headers: {
        //     "content-type": "application/json",
        //     "apikey": "FcKdtJs202110",
        //     "username": "5zo"
        //   }
        // })
        console.log(data)
        this.SingleProductDetail = data
        this.ModalOpened = true
        
      } catch (error) {
        console.log(error.response.data)
      } 
    }
  }  
}
</script>

<style lang="scss" scoped>
  div {
    box-sizing: border-box;
  }
  .black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    padding: 20px;
  }
  .white-bg {
    width: 100%;  
    padding: 20px;
    background: white;
    border-radius: 8px;      
  }
</style>