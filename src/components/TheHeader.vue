<template>
  <header>
    <RouterLink to="/">Main.</RouterLink>
    <RouterLink to="/about">About.</RouterLink>
    <RouterLink to="/singleproductdetail">SingleProductDetail.</RouterLink>
    <RouterLink to="/addItem">AddItem.</RouterLink>

    <!-- 로그인 안된 상태 -->
    <template v-if="!currentUser"> 
      <RouterLink to="/signup">Sign Up.</RouterLink>
      <RouterLink to="/login">Log In.</RouterLink>
    </template>

    <!-- 로그인 된 상태 -->
    <div v-if="currentUser">
      <div class="profile-img" :style="{ backgroundImage: `url(${currentUser.profileImg})` }"></div>
      {{ currentUser.displayName }}
    </div>


  </header>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.user.currentUser
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 20px 20px;
  border-bottom: 1px solid $color-primary;
  a {
    margin-right: 10px;
    line-height: 1;
  }
  .profile-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-size: cover;
  }
}
</style>
