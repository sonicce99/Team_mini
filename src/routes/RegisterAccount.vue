<template>
  <div>
   계좌 정보 등록 
  </div>
  <br>

  <span>
    {{ $route.params.bankname }} 계좌번호
    {{ $route.params.accountlength}} 자리를 입력하세요.
  </span>

  <form class="inputform" @submit.prevent="register">
    
    <input  
      v-model="accountNumber" 
      type="text" 
      name="계좌번호"
      placeholder="'-'없이 계좌번호 입력" />
   
    <input 
      v-model="phoneNumber"
      type="text"
      name="전화번호" 
      placeholder="'-'없이 전화번호 입력" />
    
    <input 
      v-model="signature" 
      type="text" 
      name="서명"
      placeholder="서명 또는 성함 입력" />

    <button type="submit">등록하기</button>
  </form>

</template>

<script>
import { axiosAccount } from '~/utils/accountApiConfig'

export default {
  data() {
    return {
      accountNumber: '',
      phoneNumber: '',
      signature: '',
    }
  },
  methods: {
    async register() {
      const obj = {
        bankCode: this.$route.params.bankcode,
        accountNumber: this.accountNumber,
        phoneNumber: this.phoneNumber,
        signature: this.signature
      }
      const { data } = await axiosAccount.post('',obj)
      console.log(data)
    }
  }
}
</script>
