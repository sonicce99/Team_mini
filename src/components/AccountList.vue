<template>
  <tr>
    <!-- 은행명 -->
    <td class="bankName">
      {{ accountInfo.bankName }}
    </td>
    <!-- 계좌번호 -->
    <td class="font">
      {{ accountInfo.accountNumber }}
    </td>
    <!-- 현재 잔액 -->
    <td class="font">
      {{ accountInfo.balance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")+" 원" }}
    </td>
    <td>
      <AccountRemove :id="accountInfo.id"/>
    </td>    
  </tr>
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
  .bankName {
    @include text-style(14, $dark);
    font-weight: 600;
    white-space: normal;
  }
  .font {
    @include text-style(13, $dark);
  }
</style>