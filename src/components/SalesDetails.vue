<template>
  <h2>판매 내역</h2>
  <ul>
    <li v-for="item in salesDetails" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  created() {
    this.fetch()
  },
  computed: {
    salesDetails() {
      return this.$store.state.admin.salesDetails
    },
  },
  methods: {
    async fetch() {
      await this.$store.dispatch('admin/SHOW_SALESDETAILS')
    },
  },
}
</script>
