<template>
  <div>
    <button @click="now = '구매'">구매 내역</button>
    <button @click="now = '확정'">구매 확정 내역</button>
    <button @click="now = '취소'">취소 내역</button>
  </div>

  <div class="contents-box">
    <div v-if="!purchaseList.length">구매 신청 내역이 없습니다</div>
    <div v-else-if="isLoading">Loading...</div>
    <div v-else>
      <template v-if="now === '구매'">
        <PurchaseItem
          v-for="purchase in purchaseList"
          :key="purchase.id"
          :purchase="purchase" />
      </template>
      <template v-if="now === '확정'">
        <PurchaseItem
          v-for="purchase in doneList"
          :key="purchase.id"
          :purchase="purchase" />
      </template>
      <template v-if="now === '취소'">
        <PurchaseItem
          v-for="purchase in canceledList"
          :key="purchase.id"
          :purchase="purchase" />
      </template>
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
      now: '구매'
    }
  },
  computed: {
    purchaseList() {
      return this.$store.getters["user/purchaseOnlyRequested"]
    },
    doneList() {
      return this.$store.getters["user/purchaseOnlyDone"]
    },
    canceledList() {
      return this.$store.getters["user/purchaseOnlyCanceled"]
    }
  },
  created() {
    this.$store.dispatch("user/getPurchaseList")
  }
}
</script>
