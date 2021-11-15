<template>
<!-- 최상위 RouterLink로 변경 가능 -->
  <ul class="purchased-item">
    <!-- 단일 제품 상세 구매 내역 이동시 필요 -->
    <li>{{ purchase.timePaid }}</li>
    <li>{{ purchase.product.title }}</li>
    <li>{{ purchase.product.price }}</li>
    <button @click="confirmed">구매확인</button>
    <button @click="cancle" :disabled="purchase.done">
          구매취소
    </button>
    <li>{{ purchase.done? '구매확정 됨': '구매확정 전' }}</li>
    <li>{{ purchase.isCanceled? '취소 됨': '취소 전' }}</li>

    <PurchaseDetailModal v-model="isModalShow" persistent >
      <template #activator>
        <button @click="isModalShow = true">상세보기</button>
      </template>
      <template #default>
        <button class="close-modal" @click="isModalShow = false">닫기 X</button>
        <SingleProductDetailPurchaseList v-if="isModalShow" :detailId="purchase.detailId" />
      </template>
    </PurchaseDetailModal>     
  </ul>
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
