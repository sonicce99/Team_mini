<template>
  <div class="admin-info">
    <img src="profileImgBase64" alt="url 데이터 넣어줄 예정임">
    <p></p>
  </div>
  <AdminHeader />
  <RouterView />
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
.admin-info {
  
}
</style>
