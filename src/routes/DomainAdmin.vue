<template>
  <div class="wrapper">
    <div class="admin-tab">
      <div class="admin-info">
        <img :src="user.profileImg? user.profileImg : 'https://via.placeholder.com/150'" alt="프로필">
        <p>{{user.displayName}}</p>
        <p>{{user.email}}</p>
      </div>
      <AdminHeader />
      <RouterLink :to="{ name: 'Home' }">
        홈으로
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>


<script>
import AdminHeader from '~/components/AdminHeader'

export default {
  components: {
    AdminHeader
  },
  computed: {
    user() {
      return this.$store.state.user.currentUser
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 90vh;
  padding: 3rem 3.2rem;
  box-sizing: border-box;
  display: flex;
  .admin-tab {
    width: 220px;
    height: 90vh;
    border: 1px  solid $border;
    position: relative;
    .admin-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 10rem;
      img {
        width: 3rem;
        height: 3rem;
        padding: 0 !important;
        border-radius: 50%;
        padding-left: 0.7rem;
      }
      p {
        margin-top: 1rem;
      }
    }
    a {
      display: block;
      position: absolute;
      width: 100%;
      bottom: 0;
      text-decoration: none;
      text-align: center;
      padding: 1rem;
      border-top: 1px  solid $border;
      &:hover {
        color: $blue;
      }
    }
  }
}
</style>
