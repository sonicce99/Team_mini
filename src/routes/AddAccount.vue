<template>

  <RouterLink
    class="btn-list btn-anchor btn-16"
    :to="{ name: 'MyAccount' }"
  >
  내 계좌 목록으로 가기
  </RouterLink>

  <h1>계좌 간편 연결</h1>

  <BanklistItem  
    v-for="bank in banklist"
    :key="bank.code"
    :bank="bank"   />

</template>

<script>
import { axiosAccount } from '~/utils/accountApiConfig'
import BanklistItem from '~/components/BanklistItem'

export default {
  components: {
    BanklistItem    
  },
  data() {
    return {
      banklist: []
    }
  },
  async created() {
    await this.getBanklist()
  },
  methods: {
    async getBanklist() {
      const { data } = await axiosAccount.get('banks')
      console.log(data)
      this.banklist = data
    }
  }
}
</script>

<style lang="scss" scoped>
 h1 {
      text-align: center;
      font-weight: 400;
      margin-bottom: 1.2em;
    }
.btn-list {
  position: absolute;
  left: 50%;
  margin-left: -84px;
  margin-top: 400px;
}
</style>