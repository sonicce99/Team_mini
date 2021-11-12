<template>
<!-- 최상위 RouterLink로 변경 가능 -->
<div>
  <div>{{ purchase.detailId }}</div>
  <div>{{ purchase.timePaid }}</div>
  <!-- 취소 여부 -->
  <div>{{ purchase.isCanceled }}</div>
  <!-- 확정 여부 -->
  <div>{{ purchase.done }}</div>


  <!-- 단일 제품 상세 구매 내역 이동시 필요 -->
  <div>{{ purchase.product.productId }}</div>

  <div>{{ purchase.product.title }}</div>
  <div>{{ purchase.product.price }}</div>
  <div>{{ purchase.product.description }}</div>
  <div>{{ purchase.product.tags }}</div>
  <img :src="purchase.product.thumbnail" alt="" />
</div>
</template>

<script>
export default {
  props: {
    purchase: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
