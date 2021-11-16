<template>
  <div class="product-searcher">
    <h1>
      Product Management Console
    </h1>
    <RouterLink  :to="{ name: 'AddProduct' }" class="add-product btn-anchor btn-16">
      제품 추가
    </RouterLink>
    <div class="controller">
      <button class="all-product btn-anchor btn-16" @click="getAllProducts">전체 제품 보기</button>
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
        <div v-show="isAll">
          <AllProductsList
            v-for="product in allProducts"
            :key="product.id"
            :product="product" />
        </div>
        <div v-show="!isAll">
          <AllProductsList
            v-for="product in SelectedProducts"
            :key="product.id"
            :product="product" />
        </div>         
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
      isAll: true,
      seletedTags: []
    }
  },
  computed: {
    allProducts () {
      return this.$store.state.admin.allProducts
    },
    SelectedProducts () {
      return this.$store.state.admin.seletedProducts
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
      this.isAll = true
    },
    select(e) {
      e.target.checked ? 
      this.seletedTags.push(e.target.id) :
      this.seletedTags = this.seletedTags.filter( tag => tag !== e.target.id)
      if (this.seletedTags.length) {
        this.$store.dispatch("admin/getSelectedProducts",this.seletedTags)
        this.isAll = false
      } else {
        this.isAll = true
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.product-searcher {
  padding-left: 3.2rem;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  h1 {
    width: 100%;
    user-select: none;
  }
  .add-product{
    display: block;
    position: absolute;
    top: 2rem;
    right: 2rem;
    line-height: 2.6;
  }
  .controller {
    .all-product {
      display: block;
      padding: 0.4rem
    }
    .tags {
      display: flex;
      overflow-x: auto;
      height: 4rem;
      align-items: center;
      input {
        display: none;
        &:checked + .tag-box {
          color: $blue
        }
      } 
      &::-webkit-scrollbar {
      height: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: darken($border, 30%);;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-track {
        background-color: $border;
        border-radius: 10px;
        box-shadow: inset 0px 0px 5px white;
      } 
      .tag-box {
        user-select: none;
        height: 50%;
        line-height: 2;
        padding: 0 1rem;
        text-align: center;
        border-radius: 1rem;
        margin: 0.5rem 0.5rem;
        flex-shrink: 0;
        border: 1px solid $border;
      }
    }
  }
  .contents-box{
    overflow: auto;
    border: 1px solid $border;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darken($border, 30%);;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: $border;
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    } 
  }
}
</style>
