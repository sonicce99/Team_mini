<template>
  <HomeHeader />
  <div class="input-group">
    <i class="bx bx-search"></i>
    <input class="form-input" type="text" placeholder="상품을 검색하세요" />
  </div>
  <div class="items">검색된 상품이 표시됩니다</div>
</template>

<script>
import HomeHeader from '~/components/HomeHeader'

export default {
  components: {
    HomeHeader,
  },
  methods: {
    logOut() {
      sessionStorage.removeItem('token')
      this.$store.dispatch('user/logOut')
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.input-group {
  width: 50%;
  margin: 0 auto 60px;

  .form-input {
    padding-left: 40px;
  }
}

.items {
  height: 500px;
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid red;
}
</style>
