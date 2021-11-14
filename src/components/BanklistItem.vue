<template>

  <div class="list">
    <span>{{ bank.name }}</span>
    <span >{{ bank.code }}</span>
    <!-- 은행목록의 digits는 user에게 보여줄 필요가 
    없을 것 같아 일단 주석 처리해두었습니다. -->

    <span>{{ bank.digits }}</span>
    <span v-if="bank.disabled">연결된 계좌</span>
    <RouterLink 
    :to="{ name: 'RegisterAccount', 
    params: { bankname: bank.name , bankcode: bank.code 
    ,accountlength: digitLength } }" v-else>연결하기</RouterLink>

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
  data() {
    return {
      a: 'bankcode'
    }
  },
  computed: {
    //accountlength확인
    digitLength() {
      return this.bank.digits.reduce((acc, cur) => 
      acc + cur, 0)
    }
  },
  methods: {
    isShow() {
      console.log('isshow 클릭되는 중입니당')
    }
  }
}
</script>
