<template>
  <div class="product-searcher">
    <h1>
      Product Management Console
    </h1>
    <div class="controller">
      <button class="add-product">제품 추가 하기</button>
      <button class="all-product" @click="getAllProduts">전체 제품 보기</button>
      <button class="select-product" @click="getTaggedProducts">선택한 제품 보기</button>
      <template v-for="tag in tags" :key="tag">
        <label :for="tag">
          <input type="checkbox" :id="tag" @click="select">
          {{ tag }}
        </label>
      </template>
    </div>
    <div class="contents-box">
      <div v-if="!allProducts.length">전체 제품 관리 페이지 입니다</div>
      <div v-else-if="isLoading">Loading...</div>
      <div v-else>
        <AllProductsList 
          v-for="product in allProducts" 
          :key="product.id"
          :product="product" />           
      </div>
    </div>
  </div>
</template>

<script>
import AllProductsList from '~/components/AllProductsList'

export default {
  components: {
    AllProductsList,
  },
  data() {
    return {
      isLoading: false,
      seletedTags: []
    }
  },
  computed: {
    allProducts () {
      return this.$store.state.user.allProducts
    },
    tags () {
      return this.$store.getters["user/tagSet"]
    }
  },
  created() {
    this.$store.dispatch("user/getAllProducts")
  },
  methods: {
    getAllProduts() {
      this.$store.dispatch("user/getAllProducts")
    },
    select(e) {
      e.target.checked ? 
      this.seletedTags.push(e.target.id) :
      this.seletedTags = this.seletedTags.filter( tag => tag !== e.target.id)
    },
    getTaggedProducts() {
      this.$store.dispatch("user/getAllProducts",this.seletedTags)
    }
  }
}
</script>

<style lang="scss" scoped>
.product-searcher {
  padding-left: 3.2rem;
  width: 100%;
  border: 1px solid greenyellow;
  height: 50rem;
  .controller {
    border: 1px solid darkgoldenrod;
    .add-product{
      display: block;
    }
    .all-product {
      display: block;
    }
    .select-product {
      display: block;
    }
  }
  .contents-box{
    overflow: auto;
    height: 41rem;
    border: 1px solid darkgoldenrod;
  }
}
</style>
