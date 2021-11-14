<template>
  <!-- 생각이 바뀌었다면 홈으로 -->
  <RouterView/>
  <RouterLink
    class="move-home"
    to="/"
  >
    HOME
  </RouterLink>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  letter-spacing: -0.03em;
  color: #212529;
  font-size: 16px;
}

.move-home {
  position: absolute;
  top: 40px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 44px;
  padding: 0 12px;
  border-radius: 6px;
  margin-bottom: 12px;
  font-size: 16px;
  border: 1px solid #d3dce6;
  transition: color 200ms ease-in-out;
  text-decoration: none;

  &:focus,
  &:hover,
  &:active {
    outline: none;
    box-shadow: none;
    color: #3da5f5;
  }
}
</style>
