<template>
  <div>
    모든 제품 조회
  </div>
</template>

<script>
export default {
  computed: {
    allProducts () {
      return this.$store.state.heropy.allProducts
    }
  },
  methods: {

  }
}
</script>
