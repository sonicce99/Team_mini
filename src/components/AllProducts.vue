<template>
  <div class="product-searcher">
    <h1>
      Product Management Console
    </h1>
    <div class="controller">
      <RouterLink :to="{ name: 'AddProduct' }" class="add-product">제품 추가 하기</RouterLink>
      <button class="all-product" @click="getAllProducts">전체 제품 보기</button>
      <div class="tags">
        <template v-for="tag in tags" :key="tag">
          <input type="checkbox" :id="tag" @click="select">
          <div class="tag-box">
            <label class="tag" :for="tag">
              {{ tag }}
            </label>
          </div>
        </template>
      </div>
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
      return this.$store.state.admin.allProducts
    },
    tags () {
      return this.$store.getters["admin/tagSet"]
    }
  },
  created() {
    this.$store.dispatch("admin/getAllProducts")
  },
  methods: {
    getAllProducts() {
      this.$store.dispatch("admin/getAllProducts")
    },
    select(e) {
      e.target.checked ? 
      this.seletedTags.push(e.target.id) :
      this.seletedTags = this.seletedTags.filter( tag => tag !== e.target.id)
    },
    // getTaggedProducts() {
    //   this.$store.dispatch("user/getAllProducts",this.seletedTags)
    // }
  }
}
</script>

<style lang="scss" scoped>
.product-searcher {
  padding-left: 3.2rem;
  width: 100%;
  border: 1px solid greenyellow;
  height: 90vh;
  display: flex;
  flex-direction: column;
  h1 {
    width: 100%;
  }
  .controller {
    border: 1px solid darkgoldenrod;
    .add-product{
      display: block;
      border: 2px solid green;
    }
    .all-product {
      display: block;
    }
    .select-product {
      display: block;
    }
    .tags {
      display: flex;
      input {
        display: none;
        &:checked + .tag-box {
          background: chocolate;
        }
      } 
      .tag-box {
        width: 3rem;
        text-align: center;
        border-radius: 1rem;
        margin: 0.5rem 0.5rem;
        border: 2px solid red;
      }
    }
  }
  .contents-box{
    overflow: auto;
    border: 1px solid darkgoldenrod;
  }
}
</style>
