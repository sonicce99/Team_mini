<template>
  <div class="request-area">
    <h1>상품 구매</h1>
    <div class="product-info">
      <h2>상품 정보</h2>
      <div><span>구매할 상품은 </span>{{ $route.query.title }}<span> 입니다.</span></div>
      <div><span>가격 : </span>{{ $route.query.price }}</div>
    </div>
    <div class="account-info">
      <h2>결제할 계좌 선택</h2>
      <ul>
        <li v-for="account in accounts" 
          :key="account.id">
            <div>{{ account.bankName }}</div>
            <div>{{ account.accountNumber }}</div>
            <div>{{ account.balance }}</div>
            <input type="radio" @click="setSelectedAccount" name="account" :value="account.id">
        </li>
      </ul>
    </div>
    <button @click="requestPurchase">구매 신청</button>
  </div>  
</template>

<script>
import { axiosAccount } from '~/utils/accountApiConfig'
import { axiosUserProduct } from '~/utils/productApiConfig'

export default {
  data() {
    return {
      accounts: [],
      selectedAccount: ''
    }
  },
  async mounted() {
    await this.getAccountInfo()    
  },
  methods: {
    setSelectedAccount(e) { //selectedAccount변수에 선택한 계좌의 id를 넣는다.
      this.selectedAccount = e.target.value
    },
    async getAccountInfo() { // 서버에서 계좌 불러오기
      const { data } = await axiosAccount.get() 
      console.log(data)
      this.accounts = data.accounts  
    },
    
    async requestPurchase() { //구매신청버튼 누른 후 실행될 함수. 서버에 구매할 제품id와 결제할 계좌id를 보낸다
      const obj = {
        productId : this.$route.params.id,
        accountId : this.selectedAccount
      }
      try{
        const { data } = await axiosUserProduct.post('buy', obj)
        return data
      } catch(error){
        alert(error.response.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .request-area{
    border: 5px solid #888;
    padding: 20px;
    h1 {
    font-size: 35px;
    font-weight: 800;
    }
  .product-info{
    border: 1px solid red;
    h2 {
      font-size: 20px;
      margin: 20px 0;
    }    
    }
  .account-info{
    ul{
      display:flex;
      li + li{
        margin-left: 20px
      }
    }
    border: 1px solid blue;
    h2 {
      font-size: 20px;
      margin: 20px 0;
    }    
  }
}
</style>
