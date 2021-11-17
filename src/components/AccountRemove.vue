<template>
  <button class="btn-cancel" @click="AccountRemove">해지하기</button>

  <div class="black-bg" v-if="removed === true">
    <div class="white-bg">
      <button @click="closed">닫기</button>
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
        const obj = {
          accountId: this.id,
          signature: true
        }
        const deleteApi = await axiosAccount.delete('',{data: obj})
        console.log(deleteApi)
        this.removed = true

      } catch (error) {
        console.log(error.response.data)
      }
    },
    // 닫기 버튼 클릭시 모달창 닫기
    closed() {
      this.removed = false
      this.$router.go()
    }
  }  
}
</script>

<style lang="scss" scoped>
  .btn-cancel {
    @include text-style(14);
    height: 36px;
  }
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