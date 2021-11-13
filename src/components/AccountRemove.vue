<template>
  <form @submit="AccountListChangeCheck" name="input">
    <input type="text" v-model="accessId" placeholder="계좌 ID를 입력하세요: "/>
    <input type="text" v-model="signature" placeholder="해지하고 싶으면 true를 입력하세요: "/>
    <button type="submit">해지하기</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      accessId:"",
      signature:false,
    }
  },
  methods: {
    async AccountListChangeCheck() {
      try {
        // 추후에 Login Page에서 sessionStorage set 시켜야함. 현재 로그인 페이지가 없어서 작성을 못했음.
        const token = sessionStorage.getItem("accessToken")
        const res = await axios({
          url:"https://asia-northeast3-heropy-api.cloudfunctions.net/api/account",
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            "apikey": "FcKdtJs202110",
            "username": "5zo",
            authorization: `Bearer ${token}`            
          },
          data: {
            "accessId":this.accessId,
            "signature":this.signature,
          }
        })
        console.log(res)
      } catch (error) {
        console.log(error.response.data)
      } 
    }
  }  
}
</script>