<template>

  <RouterLink
    class="btn-list btn-anchor btn-16"
    :to="{ name: 'MyAccount' }"
  >
  내 계좌
  </RouterLink>

  <div class="form-group">
    <form @submit.prevent="register">
      <h1>{{ $route.params.bankname }} 계좌 연결</h1>
      <label for="user-account-number">
        계좌번호 {{$route.params.accountlength}}자리
        </label> 
      <input
        class="form-input"
        v-model="accountNumber" 
        type="text"
        placeholder="'-'없이 계좌번호를 입력하세요." />
    
      <label for="user-phone-number">전화번호</label> 
      <input 
        class="form-input"
        v-model="phoneNumber"
        type="text"
        placeholder="'-'없이 전화번호를 입력하세요." />
      
      <label for="user-signature">서명</label> 
      <input 
        class="form-input"
        v-model="signature" 
        type="text"
        placeholder="서명을 입력하세요." />

      <button class="btn-primary btn-16" type="submit">등록하기</button>
    </form>

  </div>
  
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

<style lang="scss" scoped>

  .btn-list btn-anchor btn-16 {
    position: absolute;
    top: 40px;
    margin-left: 40px;
  }
  .form-group {
    @include column-flexbox();
    width: 100%;

      h1 {
      text-align: center;
      font-weight: 400;
      }

      label {
      @include text-style(14, $primary);
      }
      
      .form-input {
      width: 360px;
      padding-left: 12px;
      margin-bottom: 10px;
      }
      .btn-primary {
      width: 100%;
      }
      
  }
   
</style>