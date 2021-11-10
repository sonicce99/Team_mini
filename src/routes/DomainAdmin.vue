<template>
  <div>관리자 정보</div>
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
