<template>

<div class="bank-group">
  <div class="bank-list">
      <span class="bank-connect">{{ bank.name }}</span>
      <span class="bank-connect-completed"
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
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.bank-group {
    @include column-flexbox();
    width: 100%;
    .bank-connect {
      padding-right: 40px;
    }
    .bank-connect-completed {
      @include text-style(14, $secondary);
      margin-right: 14px;
    }
    .bank-list {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 300px;
      line-height: 2.5;
      border: 1px solid $border;
      border-left: none;
      border-right: none;
      }
    .btn-primary {
      width: 70px;
      height: 25px;
      font-size: 14px;
    }
  }

</style>