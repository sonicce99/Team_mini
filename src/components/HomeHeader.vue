<template>
  <RouterLink to="/">
      Home
    </RouterLink>
  <RouterLink to="/admin">
      Admin
    </RouterLink>
  <RouterLink to="/certification/signin">
    로그인
  </RouterLink>
  <RouterLink to="/mypage/purchaselist">
    마이페이지
  </RouterLink>
  <button @click="logOut">로그아웃</button>
</template>

<script>
export default {
  methods: {
    logOut() {
      sessionStorage.removeItem('accessToken')
      this.$store.dispatch('user/logOut')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  margin-left: 5px;
  text-decoration: none;
}
button {
  margin-left: 5px;
}
</style>
