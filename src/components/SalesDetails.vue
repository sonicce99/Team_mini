<template>
  <h2>판매 내역</h2>
    <ul>
      <li v-for="item in allSellList" :key="item">{{ item }}</li>
    </ul>
</template>

<script>
export default {
  computed: {
    allSellList() {
      return this.$store.state.admin.allSellList
    }
  },
  created() {
    this.$store.dispatch("admin/getAllSellList")
  },
  methods: {}
}
</script>
