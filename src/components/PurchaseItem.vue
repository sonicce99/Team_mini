<template>
<!-- 최상위 RouterLink로 변경 가능 -->
  <ul class="purchased-item">
    <!-- 단일 제품 상세 구매 내역 이동시 필요 -->
    <!-- <li>{{ purchase.detailId }}</li> -->
    <li>{{ purchase.timePaid }}</li>
    <li>{{ purchase.product.title }}</li>
    <li>{{ purchase.product.price }}</li>
    <button @click="confirmed(purchase.detailId)">구매확인</button>
    <button @click="cancle(purchase.detailId)" :disabled="purchase.done">
          구매취소
    </button>
    <li>{{ purchase.done }}</li>
    <li>{{ purchase.isCanceled }}</li>
    <button @click="showPurchaseDetail">상세보기</button>
    <!-- <li>{{ purchase.product.productId }}</li> -->
    <!-- <li>{{ purchase.product.description }}</li>
    <li>{{ purchase.product.tags }}</li> -->
    <!-- <img :src="purchase.product.thumbnail" alt="" /> -->    
  </ul>
  <SingleProductDetailPurchaseList v-if="isShow" :detailId="purchase.detailId" />
  <!-- 나중에 버튼으로 모달안에 상세구매내역 나타나게 할 것. -->
</template>

<script>
import SingleProductDetailPurchaseList from '~/components/SingleProductDetailPurchaseList'

export default {
  data() {
    return {
      isShow: false,
    }
  },
  props: {
    purchase: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    SingleProductDetailPurchaseList
  },
  methods: {
    async cancle(id) {
      this.$store.dispatch('user/CANCEL_PURCHASE', id)
      await this.fetch()
    },
    async confirmed(id) {
      this.$store.dispatch('user/CONFIRM_PURCHASE', id)
      await this.fetch()
    },
    fetch() {
      console.log('구매 내역 불러오기')
    },
    showPurchaseDetail(){
    this.isShow = !this.isShow
    },
  }
}
</script>

<style lang="scss" scoped>
 .purchased-item {
   list-style: none;
   border: 2px solid red;
   display: flex;
   justify-content: space-around;
 }
</style>
