<template>
  <div class="product">
    <img :src="product.thumbnail? product.thumbnail: 'https://via.placeholder.com/150'" alt="">
    <div>{{ product.title }}</div>
    <div>{{ product.description }}</div>
    <div>{{ product.price }}</div>
    <div> {{ product.isSoldOut }}</div>
    <!-- 필수로 들어오는게 아닌 요소  -->
    <div>{{ product.tags.join(",") }}</div>
    <div>{{ product.id }}</div>

    <RouterLink :to="{ name: 'EditProduct', params: { id: product.id }}">수정하기</RouterLink>
    <!-- 구매신청은 상세페이지 안에 있어야함. 지금은 그냥 테스트용으로 여기에 만듦. -->
    <RouterLink :to="{ name: 'RequestPurchase', params: { id: product.id }, query: {title: product.title, price: product.price}}">구매하기</RouterLink>
    <RouterLink :to="{ name: 'SingleProductDetails', params: { id: `${product.id}` }}">단일 제품 상세 정보</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.product {
  padding: 1rem;
  display: flex;
  border: 1px solid red;
  img {
    width: 90px;
  }
}
</style>

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
