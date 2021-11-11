<template>
  <RouterView/>
  <!-- 생각이 바뀌었다면 홈으로 -->
  <RouterLink to="/">
    홈으로
  </RouterLink>

</template>

<script>
export default {
  mounted() {
    console.log(this.$route.path)
  }
}
</script>
