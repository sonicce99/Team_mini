<template>
  <div>제품 전체 구매 내역이 보여지고 있다고 합니다</div>
  <div class="contents-box">
    <div v-if="!purchaseList.length">제품 전체 구매 내역</div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <PurchaseItem 
        v-for="purchase in purchaseList"
        :key="purchase.id"
        :purchase="purchase" />
    </div>
  </div>
</template>

<script>
import PurchaseItem from '~/components/PurchaseItem'

export default {
  components: {
    PurchaseItem
  },
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    purchaseList() {
      return this.$store.state.user.purchaseList
    }
  },
  created() {
    this.$store.dispatch("user/getPurchaseList")
  }
}
</script>
