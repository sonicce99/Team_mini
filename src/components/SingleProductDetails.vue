<template>
  <div class="product-info" v-if="ModalOpened === true">
    <h2>제품 상세 조회</h2>
    <p>제품명: {{ this.dataObject.title }}</p>
    <p>제품 가격: {{ this.dataObject.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")+" 원" }}</p>
    <p>제품 설명: {{ this.dataObject.description }}</p>
    <p>제품 태그: {{ this.dataObject.tags.toString() }}</p>

    <!-- 재고 있는지 없는지 판별 -->
    <p v-if="this.dataObject.isSoldOut === false">매진 여부: 재고 있음</p>
    <p v-else>매진 여부: 재고 없음</p>

    <!-- 제품 예약 관련 -->
    <div v-if="this.dataObject.reservations.length === 0">예약 판매 안함</div>
    <div v-else>
      <p>예약 시작 시간: {{ this.dataObject.reservations.reservation.start }}</p>
      <p>예약 종료 시간: {{ this.dataObject.reservations.reservation.end }}</p>
    </div>

    <!-- 썸네일 사진 있는지 없는지 판별 -->
    <div v-if="this.dataObject.thumbnail === null">썸네일 없음</div>
    <div v-else>
      <img class= "thumbnail" :src="this.dataObject.thumbnail" alt="제품 썸네일" />
      <p>제품 썸네일</p>
    </div>

    <!-- 제품사진 있는지 없는지 판별 -->
    <div v-if="this.dataObject.photo === null">제품 사진 없음</div>
    <div v-else>
      <img class= "detail" :src="this.dataObject.photo" alt="제품 사진" /> 
      <p>제품 사진</p>
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
      dataObject:{},
      ModalOpened: false
    }
  },
  methods: {
    async SingleProductDetails() {
      try {
        const { data } = await axiosPublicProduct.get(`${this.$route.params.id}`)
        this.dataObject = data
        // console.log(this.dataObject)
        this.ModalOpened = true
        
      } catch (error) {
        console.log(error.response.data)
      } 
    }
  }  
}
</script>