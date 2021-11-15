<template>

  <div>연결 가능한 은행 목록</div>

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