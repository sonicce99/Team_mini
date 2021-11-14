<template>
  <AccountListChangeCheck />
  <RouterLink :to="{ name: 'AddAccount' }">계좌 연결하기</RouterLink>

</template>

<script>
import AccountListChangeCheck from './AccountListChangeCheck.vue'
export default {
  components: {
    AccountListChangeCheck
  }
}
</script>
