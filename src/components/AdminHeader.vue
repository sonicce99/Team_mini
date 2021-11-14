<template>
  <nav>
    <RouterLink :to="{ name: 'AllProducts' }">
      제품 조회
    </RouterLink>
    <RouterLink :to="{ name: 'SalesDetails' }">
      판매 내역
    </RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 220px;
  border: 1px solid red;
  a {
    display: block;
    text-decoration: none;
    text-align: center;
    padding: 1rem;
    margin: 1rem 0;
  }
}
</style>
