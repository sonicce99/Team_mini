<template>
  <div class="wrapper">
    <div class="admin-tab">
      <div class="admin-info">
        <img src="https://avatars.githubusercontent.com/u/75520260?s=96&v=4" alt="프로필 url 데이터 넣어줄 예정임">
        <p>디스플레이 네임</p>
      </div>
      <AdminHeader />
    </div>
    <RouterView />
  </div>
</template>


<script>
import AdminHeader from '~/components/AdminHeader'

export default {
  components: {
    AdminHeader
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  padding: 3rem 3.2rem;
  box-sizing: border-box;
  display: flex;
  .admin-tab {
    width: 220px;
    height: 90vh;
    margin-bottom: 1rem;
    border: 1px solid orange;
    .admin-info {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 10rem;
      margin-bottom: 2rem;
      border: 1px solid red;
      img {
        width: 3rem;
        border-radius: 50%;
        padding-left: 0.7rem;
      }
      p {
        padding-right: 0.7rem;
      }
    }
  }
}
</style>
