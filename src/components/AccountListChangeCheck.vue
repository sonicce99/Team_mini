<template>
  <h1>나의 계좌 리스트가 보여지고 있습니다!</h1>
  <ul>
    <AccountList 
    v-for="accountInfo in accountInfos" 
    :key="accountInfo.id"
    :accountInfo="accountInfo" />
  </ul>
</template>

<script>
import { axiosAccount } from '~/utils/accountApiConfig'
import AccountList from '~/components/AccountList'

export default {
  components: {
    AccountList,
  },
  mounted() {
    this.AccountListChangeCheck()
  },
  data() {
    return {
      accountInfos: []
    }
  },
  methods: {
    async AccountListChangeCheck() {
      try {
        const { data } = await axiosAccount.get()
        this.accountInfos = data.accounts

      } catch (error) {
        console.log(error.response.data)
      } 
    }
  }  
}
</script>
