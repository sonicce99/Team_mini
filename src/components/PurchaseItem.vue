<template>
<!-- 최상위 RouterLink로 변경 가능 -->
  <div class="purchased-item">
    <!-- 단일 제품 상세 구매 내역 이동시 필요 -->
    <div>{{ purchase.timePaid }}</div>
    <div>{{ purchase.product.title }}</div>
    <div>{{ purchase.product.price }}</div>
    <button @click="confirmed">구매확인</button>
    <button @click="cancle" :disabled="purchase.done">
          구매취소
    </button>
    <!-- <div>{{ purchase.done? '구매확정 됨': '구매확정 전' }}</div> -->
    <!-- <div>{{ purchase.isCanceled? '취소 됨': '취소 전' }}</div> -->

    <PurchaseDetailModal v-model="isModalShow" persistent >
      <template #activator>
        <button @click="isModalShow = true">상세보기</button>
      </template>
      <template #default>
        <button class="close-modal" @click="isModalShow = false">닫기 X</button>
        <SingleProductDetailPurchaseList :detailId="purchase.detailId" />
      </template>
    </PurchaseDetailModal>     
  </div>
</template>

<script>
import SingleProductDetailPurchaseList from '~/components/SingleProductDetailPurchaseList'
import PurchaseDetailModal from '~/components/PurchaseDetailModal'

export default {
  data() {
    return {
      isModalShow: false,
    }
  },
  props: {
    purchase: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    SingleProductDetailPurchaseList,
    PurchaseDetailModal
  },
  methods: {
    async cancle() {
      this.$store.dispatch('user/CANCEL_PURCHASE', { detailId: this.purchase.detailId})
    },
    async confirmed() {
      this.$store.dispatch('user/CONFIRM_PURCHASE', { detailId: this.purchase.detailId})
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
  .close-modal{
    float:right;
  }
</style>
