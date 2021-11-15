<template>
  <div class="container">
    <RouterLink class="btn-anchor btn-16" to="/"> Home </RouterLink>
    <RouterLink
      class="btn-anchor btn-16"
      v-if="!currentUser"
      to="/certification/signin"
    >
      로그인
    </RouterLink>
    <RouterLink class="btn-anchor btn-16" v-if="currentUser" to="/admin">
      Admin
    </RouterLink>
    <div v-if="currentUser">
      <RouterLink class="btn-anchor btn-16" to="/mypage/purchaselist">
        마이페이지
      </RouterLink>
      <button class="btn-anchor btn-16" @click="logOut">로그아웃</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.user.currentUser
    },
  },
  methods: {
    logOut() {
      sessionStorage.removeItem('token')
      this.$store.dispatch('user/logOut')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  @include flexbox();
  margin-bottom: 20px;
}

.btn-anchor {
  margin-left: 5px;
  text-decoration: none;
}
button {
  margin-left: 5px;
}
</style>
