<template>
  <AccountListChangeCheck />
  <RouterLink :to="{ name: 'AddAccount' }">계좌 추가 연결</RouterLink>

</template>

<script>
import AccountListChangeCheck from './AccountListChangeCheck.vue'
export default {
  components: {
    AccountListChangeCheck
  }
}
</script>
