<template>
  <RouterView/>
  <!-- 생각이 바뀌었다면 홈으로 -->
  <RouterLink
    class="btn-anchor btn-16"
    to="/"
  >
    HOME
    </RouterLink>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.path)
  }
}
</script>

<style lang="scss" scoped>
a {
  position: absolute;
  top: 40px;
  left: 40px;
}
</style>
