<template>
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink
    v-if="!currentUser"
    to="/certification/signin"
  >
    로그인
    </RouterLink>
    <RouterLink
      v-if="currentUser"
      to="/admin"
    >
      Admin
      </RouterLink>
      <div v-if="currentUser">
        <RouterLink to="/mypage/purchaselist">
          마이페이지
        </RouterLink>
        <button @click="logOut">로그아웃</button>
        <h3>{{ currentUser.displayName }}</h3>
      </div>

</template>

<script>
import { axiosAuth } from "~/utils/authenticationApiConfig"

export default {
  computed: {
    currentUser() {
      return this.$store.state.user.currentUser
    }
  },
  mounted() {
    console.log(this.$route.path)
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
a {
  margin-left: 5px;
  text-decoration: none;
}
button {
  margin-left: 5px;
}
</style>
