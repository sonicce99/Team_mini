<template>
  <div class="request-area">
    <div class="content-wrap">
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
        <h2>결제하실 계좌 선택</h2>
        <ul>
          <li class="account" v-for="account in accounts" 
            :key="account.id">
              <div class="bank-logo"></div>           
              <span>{{ account.bankName }}</span>              
              <span><strong>계좌번호</strong>{{ account.accountNumber }}</span>
              <span>계좌 잔액: {{ account.balance }}</span>
              <input class="select-radio" type="radio" @click="setSelectedAccount" name="account" :value="account.id">
          </li>
        </ul>
      </div>
      <button @click="requestPurchase">구매 신청</button>
    </div>
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
    console.log(this.$route.query.thumbnail)
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
    max-width: 1200px;
    margin: 0 auto; 
    text-align: center;
    background-color: $background; 
    
    h1 {
      text-align: left;
      margin: 50px 20px;
      @include text-style(32, $dark)
    }

    .content-wrap{
      padding: 20px;
      width: 100%;
      margin: 0 auto;

      .product-info { 

        th {
          height: 44px;
          padding: 4px 12px;
          font-size: 16px;
          vertical-align: middle;
          background-color: #1f2d3d;
          color: #fff;
        }

        td {
          font-size: 15px;
          font-weight: bold;
        }

        .product{
          @include flexbox(around, center);          

          .thumbnail {
            width: 120px;
            height: 110px;
            margin-bottom: 5px;
          }
        }    
      } 

    .account-info {

      h2{
        @include text-style(24, $dark);
        text-align: left;
        margin: 40px 20px;
      }

      ul{
        @include flexbox(around, center);
        
        .account {
          @include flexbox(end, start);
          flex-direction: column;         
          width: 300px;
          height: 180px; 
          border: 1px solid lime;
          background-color: #776c61;

          .bank-logo{
          background-image: url('https://gist.githubusercontent.com/iamidlek/978eb94e4e0c941b420a01269da9a824/raw/ab75c999255f5639e92354b2c222b482f3eaf662/bankName.png');
                         
          width: 207px;
          height: 35px;
          }

          span {
            flex-basis: 20%;
          }
          .select-radio{
            margin: 5px auto;
            width: 20px;
            height:20px;
          }

          .kookmin{
            background: url('https://gist.githubusercontent.com/iamidlek/978eb94e4e0c941b420a01269da9a824/raw/ab75c999255f5639e92354b2c222b482f3eaf662/bankName.png') no-repeat -30px -129px;
	          width: 207px;
	          height: 35px;
          }
        }
      }  
    }      
  }   
}
</style>
