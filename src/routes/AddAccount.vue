<template>

  <RouterLink
    class="btn-list btn-anchor btn-16"
    :to="{ name: 'MyAccount' }"
  >
  내 계좌
  </RouterLink>

  <h1>계좌 간편 연결</h1>

  <BanklistItem  
    v-for="bank in banklist"
    :key="bank.code"
    :bank="bank"   />

</template>

<script>
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
  created() {
    this.getBankList()
  },
  methods: {
    async getBankList() {
      const  data = await this.$store.dispatch('user/getBankList')
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
</style>
