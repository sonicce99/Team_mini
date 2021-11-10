<template>
  <h1>Home page..</h1>
  <h2>{{ heropyMessage }}</h2>
  <EditProduct/>
</template>

<script>
import EditProduct from '~/components/EditProduct.vue'
export default {
  components: { EditProduct },
  computed: {
    heropyMessage() {
      return this.$store.state.heropy.message
    }
  }
}
</script>
