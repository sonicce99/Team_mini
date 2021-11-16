<template>
  <AccountListChangeCheck />
  <RouterLink
  class="btn-secondary"
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
.btn-secondary{
  height: 30px;
}
</style>