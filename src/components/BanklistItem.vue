<template>

<div class="bank-group">
  <div class="bank-list">
      <span class="bank-name">{{ bank.name }}</span>
      <span class="bank-name-completed"
      v-if="bank.disabled">연결 완료</span>
      <RouterLink
      class="btn-primary"
      :to="{ name: 'RegisterAccount', 
      params: { bankname: bank.name ,
      bankcode: bank.code 
      ,accountlength: digitLength } }" v-else>
      연결
      </RouterLink>

    </div>
</div>
  

</template>   

<script>
export default {
  props: {
    bank: {
      type: Object,
      default: () => ({})
    },
  },
  computed: {
    digitLength() {
      return this.bank.digits.reduce((acc, cur) => 
      acc + cur, 0)
    }
  }
}
</script>
