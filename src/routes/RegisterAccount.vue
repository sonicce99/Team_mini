<template>
  <div>
   계좌 정보 등록 
  </div>

  <div>{{ $route.params.bankname }}</div>
   
   <p>accountlength(확인용으로 찍어둠)
   => input창마다 type 제한 정하기</p>
   
  <div>{{ $route.params.accountlength}}</div>

  <form class="inputform" @submit.prevent="register">
    <span>계좌번호</span>
    <input v-model="accountNumber" type="text" name="계좌번호" />
    <span>전화번호</span>
    <input v-model="phoneNumber" type="text" name="전화번호" />
    <span>서명</span>
    <input v-model="signature" type="text" name="서명" />
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
      signature: ''
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
