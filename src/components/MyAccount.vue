<template>
  <AccountListChangeCheck />
  <RouterLink
  class="btn-anchor"
  :to="{ name: 'AddAccount' }">계좌 연결</RouterLink>

</template>

<script>
import AccountListChangeCheck from './AccountListChangeCheck.vue'
export default {
  components: {
    AccountListChangeCheck
  }
}
</script>

<style lang="scss" scoped>
.btn-anchor {
  margin-left: 7px;
  min-width: 90px;
  height: 40px;
}
</style>