<template>
<!-- 최상위 RouterLink로 변경 가능 -->
  <div>
    <div>{{ product.id }}</div>
    <div>{{ product.title }}</div>
    <div>{{ product.price }}</div>
    <div>{{ product.description }}</div>
    <div> {{ product.isSoldOut }}</div>
    <!-- 필수로 들어오는게 아닌 요소  -->
    <div>{{ product.tags.join(",") }}</div>
    <img :src="product.thumbnail" alt="">
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
}
</script>
