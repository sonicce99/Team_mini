<template>
  <h1>계좌 목록 잔액 조회가 보여지고 있다고 함.</h1>
    <li v-for="accountInfo in this.accountInfos" :key="accountInfo"> {{ accountInfo }} </li>
    <AccountRemove />
</template>

<script>
import axios from 'axios'
import AccountRemove from './AccountRemove.vue'

export default {
  mounted() {
    this.AccountListChangeCheck()
  },
  data() {
    return {
      accountInfos: [    {
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
    }
]
    }
  },
  components: {
    AccountRemove
  },
  methods: {
    async AccountListChangeCheck() {
      try {
        // 추후에 Login Page에서 sessionStorage set 시켜야함. 현재 로그인 페이지가 없어서 작성을 못했음.
        const token = sessionStorage.getItem("accessToken")
        const res = await axios({
          url:"https://asia-northeast3-heropy-api.cloudfunctions.net/api/account",
          method: "GET",
          headers: {
            "content-type": "application/json",
            "apikey": "FcKdtJs202110",
            "username": "5zo",
            authorization: `Bearer ${token}`            
          }
        })
        console.log(res.accounts)
        this.accountInfos = res.accounts
      } catch (error) {
        console.log(error.response.data)
      } 
    }
  }  
}
</script>




