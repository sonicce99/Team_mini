<template>
<!-- 이 화면 모달로 만들어야함. -->
  <div class="modal">
    <h1>상품 구매</h1>
    <div class="product-info">
      <h2>상품 정보</h2>
      <div><span>구매할 상품은 </span>{{ product.title }}<span> 입니다.</span></div>
      <div><span>가격 : </span>{{ product.price }}</div>
    </div>
    <div class="account-info">
      <h2>결제할 계좌 선택</h2>
      <ul>
        <li v-for="account in accounts" 
          :key="account.id">
            <div>{{ account.bankName }}</div>
            <div>{{ account.accountNumber }}</div>
            <div>{{ account.balance }}</div>        
        </li>
      </ul>
    </div>
    <button @click="requestPurchase">구매 신청</button>
  </div>
  
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      accounts: [
    {
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
  created() {
    // getAccountInfo()
  },
  method: {

    async getAccountInfo() {
      const token = sessionStorage.getItem('accessToken')
      const { data } = await axios({
      url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/account`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'apikey': 'FcKdtJs202110',
        'username': 'KangHaEun',
        authorization: `Bearer ${token}`
      }
    })
    console.log(data)
    this.accounts = data.accounts  
    },


    //구매신청버튼 누른 후 실행될 함수. 서버에 구매할 제품id와 결제할 계좌id를 보낸다
    async requestPurchase(productId, accountId) {
    const token = sessionStorage.getItem('accessToken')
    const { data } = await axios({
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/buy`,
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'apikey': 'FcKdtJs202110',
        'username': 'KangHaEun',
        authorization: `Bearer ${token}`
      },
      data: {
        productId,
        accountId
      }
    })
    console.log(data)
    return data
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal{
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
    border: 1px solid blue;
    h2 {
      font-size: 20px;
      margin: 20px 0;
    }    
  }
  }
  


</style>