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
      accountInfos: [{
        "id": "jQMfKla8vOIFELA3mAXv",
        "bankName": "NH농협은행",
        "bankCode": "011",
        "accountNumber": "356-XXXX-XXXX-XX",
        "balance": 2999900
      },
      {
        "id": "wiPgsXvMAmcLw8AuRHIi",
        "bankName": "KB국민은행",
        "bankCode": "004",
        "accountNumber": "123-XX-XXXX-XXX",
        "balance": 3000000
      }]
    }
  },
  methods: {
    async AccountListChangeCheck() {
      try {
        // 추후에 Login Page에서 sessionStorage set 시켜야함. 현재 로그인 페이지가 없어서 작성을 못했음.
        const token = sessionStorage.getItem("accessToken")
        const { data } = await axiosAccount.get()
        console.log(data.accounts)
        this.accountInfos = data.accounts

      } catch (error) {
        console.log(error.response.data)
      } 
    }
  }  
}
</script>
