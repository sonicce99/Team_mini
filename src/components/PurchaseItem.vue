<template>
<!-- 최상위 RouterLink로 변경 가능 -->
<div>
  <!-- 단일 제품 상세 구매 내역 이동시 필요 -->
  <div>{{ purchase.detailId }}</div>
  <div>{{ purchase.timePaid }}</div>
  <button @click="cancle(purchase.detailId)" :disabled="purchase.done">
        구매취소
  </button>
  <div>{{ purchase.isCanceled }}</div>
  <button @click="confirmed(purchase.detailId)">구매확인</button>
  <div>{{ purchase.done }}</div>

  <div>{{ purchase.product.productId }}</div>
  <div>{{ purchase.product.title }}</div>
  <div>{{ purchase.product.price }}</div>
  <div>{{ purchase.product.description }}</div>
  <div>{{ purchase.product.tags }}</div>
  <img :src="purchase.product.thumbnail" alt="" />
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    purchase: {
      type: Object,
      default: () => ({})
    }
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
    }
  }
}
</script>
