<template>
  <AccountListChangeCheck />
  <div>내 계좌 정보가 보여지고 있다고 한다</div>
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
