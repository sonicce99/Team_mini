<template>
  <button @click="AccountRemove">해당 계좌 해지하기</button>

  <div class="black-bg" v-if="removed === true">
    <div class="white-bg">
      <h4>해지되었습니다!</h4>
    </div>
  </div>
</template>

<script>
import { axiosAccount } from '~/utils/accountApiConfig'

export default {
  data() {
    return {
      removed : false
    }
  },
  props: {
    id: String
  },
  methods: {
    async AccountRemove() {
      try {
        // 추후에 Login Page에서 sessionStorage set 시켜야함. 현재 로그인 페이지가 없어서 작성을 못했음.
        const token = sessionStorage.getItem("accessToken")
        const obj = {
          accountId: this.id,
          signature: true
        }
        const { data } = await axiosAccount.delete('', obj)
        console.log(data)        
        this.removed = true

      } catch (error) {
        console.log(error.response.data)
      } 
    },
  }  
}
</script>

<style lang="scss" scoped>
  div {
    box-sizing: border-box;
  }
  .black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    padding: 20px;
  }
  .white-bg {
    width: 100%;  
    padding: 20px;
    background: white;
    border-radius: 8px;      
  }
</style>