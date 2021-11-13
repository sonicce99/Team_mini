<template>
  <HomeHeader/>
  <input
    class="search"
    type="text"
    placeholder="상품을 검색하세요"
  >
    <div class="items">
      검색된 상품이 표시됩니다
    </div>
</template>

<script>
import HomeHeader from "~/components/HomeHeader"

export default {
  components: {
    HomeHeader
  },
  methods: {
    logOut() {
      sessionStorage.removeItem("token")
      this.$store.dispatch("user/logOut")
      this.$router.push("/")
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: block;
  margin: 50px auto;
  text-align: center;
}
.items {
  height: 500px;
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid red;
}

input {
  border: 1px solid #000;
}
</style>
