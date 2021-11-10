<template>
  <div>
    모든 제품 조회
  </div>
  <div class="controller">
    <button>제품 추가 하기</button>
    <button>전체 상품 보기</button>
    <!-- <div>가능하면 카테고리별로 보기 기능</div> -->
    <!-- allProducts에 tag 목록을 set으로.. getter -->
  </div>
  <div class="contents-box">
    <div v-if="!isLoading">
      <AllProductsList 
        v-for="product in allProducts" 
        :key="product.id"
        :product="product" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import AllProductsList from '~/components/AllProductsList'

export default {
  components: {
    AllProductsList
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    allProducts () {
      return this.$store.state.user.allProducts
    }
  },
  methods: {

  },
  mounted(){
  }
}
</script>

<style lang="scss" scoped>
li {
  display: flex;
}
</style>
