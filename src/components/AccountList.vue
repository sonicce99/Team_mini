<template>
  <li>
    <!-- 사용자 페이지라서 아이디 숨김 -->
    <!-- <div>계좌 아이디: {{ accountInfo.id }}</div> -->
    <div>은행명: {{ accountInfo.bankName }}</div>
    <div>은행 코드명: {{ accountInfo.bankCode }}</div>
    <div>계좌번호: {{ accountInfo.accountNumber }}</div>
    <div>현재 금액: {{ accountInfo.balance }}</div>
    <AccountRemove :id="accountInfo.id"/>
  </li>
</template>

<script>
import AccountRemove from '~/components/AccountRemove'
export default {
  components: {
    AccountRemove
  },
  props: {
    accountInfo: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
  li {
    list-style-type: none;
  }
</style>