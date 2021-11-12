<template>
  <h2>판매 내역</h2>
    <ul>
      <li v-for="item in salesDetails" :key="item">{{ item }}</li>
    </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  // [vuex] unknown action type: FETCH 에러가 나옴 ㅜ
  created() {
    this.fetch()
  },
  computed: {
    ...mapState('user',{
      salesDetails: 'salesDetails'
    })
  },
  methods: {
    ...mapActions('user', ['SHOW_SALESDETAILS']),
    fetch() {
      this.SHOW_SALESDETAILS()
    },
    onAddProduct() {
      this.$router.push('/admin')
    }
  }
}
</script>
