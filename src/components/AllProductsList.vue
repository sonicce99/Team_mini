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
    <RouterLink :to="{ name: 'EditProduct', params: { id: product.id }}">수정하기</RouterLink>
    <!-- 구매신청은 상세페이지 안에 있어야함. 지금은 그냥 테스트용으로 여기에 만듦. -->
    <RouterLink :to="{ name: 'RequestPurchase', params: { id: product.id }, query: {title: product.title, price: product.price}}">구매하기</RouterLink>
  </div>  
</template>

<script>
export default {
  props: {   
    product: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
