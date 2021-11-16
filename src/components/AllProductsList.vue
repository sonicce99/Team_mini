<template>
  <div class="product">
    <div class="info-box">
      <img :src="product.thumbnail? product.thumbnail: 'https://via.placeholder.com/150'" alt="">
      <div class="info">
        <div class="title">{{ product.title }}</div>
        <div>{{ product.tags.join(",") }}</div>
        <div class="price">{{ product.price }}</div>
        <div> {{ product.isSoldOut? '재고 없음' : '재고 있음' }}</div>
      </div>
    </div>

    <div class="link">
      <RouterLink class="edit" :to="{ name: 'EditProduct', params: { id: product.id }}">수정하기</RouterLink>
      <RouterLink class="detail" :to="{ name: 'AdminSingleProductDetails', params: { id: product.id }}">단일 제품 상세 정보</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  .info-box {
    display: flex;
    img {
      width: 90px;
    }
    .info {
      padding-left: 1rem;
    }
  }
  .edit {
    padding: 1rem;
    border: 1px solid red;

  }
  .detail {
    padding: 1rem;
    border: 1px solid red;

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
