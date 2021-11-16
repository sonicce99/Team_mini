<template>
  <div class="request-area">
    <h1>상품 구매</h1>
      <table class="product-info" border="1">
        <th>상품 정보</th>
        <th>가격</th>
        <tr>
            <td>
              <div class="product">
                <img class="thumbnail" :src="$route.query.thumbnail" alt="제품 썸네일">
                <span>{{ $route.query.title }}</span>
              </div>
            </td>
            <td>
            <div>{{ $route.query.price }}원</div>
            </td>
        </tr>
    </table>    
    <div class="account-info">
      <div class="test"></div>
      <h2>결제할 계좌 선택</h2>
      <ul>
        <li class="account" v-for="account in accounts" 
          :key="account.id">           
            <span>{{ account.bankName }}</span>
            <strong>계좌번호</strong>
            <span>{{ account.accountNumber }}</span>
            <span>계좌 잔액: {{ account.balance }}</span>
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
      selectedAccount: '',
      token : sessionStorage.getItem('token')
    }
  },
  mounted() {    
    this.loginCheck()
  },
  methods: {
    loginCheck(){
      if(this.token) {
        this.getAccountInfo()  
      }else{
        if(confirm('로그인이 필요한 서비스입니다. 로그인 하시겠습니까?')){
          this.$router.push('/certification/signin')
        }else{
          this.$router.go(-1)
        }
      }   
    },
    setSelectedAccount(e) { //selectedAccount변수에 선택한 계좌의 id를 넣는다.
      this.selectedAccount = e.target.value
    },
    async getAccountInfo() { // 서버에서 계좌 불러오기
      const { data } = await axiosAccount.get()
      this.accounts = data.accounts  
    },
    goAfterRequestPurchase(){
        if(confirm('구매 완료 되었습니다. 나의 구매내역으로 가시겠습니까? ')){
          this.$router.push('/mypage/purchaselist')
        }else{
          this.$router.go(-1)
        }
      },    
    async requestPurchase() { //구매신청버튼 누른 후 실행될 함수. 서버에 구매할 제품id와 결제할 계좌id를 보낸다
      const obj = {
        productId : this.$route.params.id,
        accountId : this.selectedAccount
      }
      try{
        const { data } = await axiosUserProduct.post('buy', obj)
        this.goAfterRequestPurchase()
        console.log(data)        
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
    margin: 0 auto;
    text-align: center;
    .product-info {
      width: 80%;
      h1 {
      font-size: 35px;
      font-weight: 800;
      }
    .product{
      border: 1px solid red;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .thumbnail {
        width: 150px;
        height: 150px;
      }
    }    
  }
  .account-info{
    border: 1px solid blue;
    width: 80%;  
    ul{
      display:flex;
      justify-content: space-evenly;
      align-items: center;
      .account {
        width: 300px;
        height: 200px;
        border: 1px solid lime;
        background-image: url('https://gist.githubusercontent.com/iamidlek/978eb94e4e0c941b420a01269da9a824/raw/ab75c999255f5639e92354b2c222b482f3eaf662/bankName.png');
        background-size: cover;
        // background-color: #776c61;
        span {
          display:block;
        }
      }
    }
    h2 {
      font-size: 20px;
      margin: 20px 0;
    }    
  }
}
</style>
