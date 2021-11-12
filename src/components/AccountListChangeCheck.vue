<template>
  <h1>계좌 목록 잔액 조회가 보여지고 있다고 함.</h1>
  <div v-for="accountInfo in this.accountInfos" :key="accountInfo">
    <li> {{ accountInfo }} </li>
    <AccountRemove />
  </div>
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
      accountInfos: {}
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
        console.log(res)
        this.accountInfos = res.data
      } catch (error) {
        console.log(error.response.data)
      } 
    }
  }  
}
</script>

