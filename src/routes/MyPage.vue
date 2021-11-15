<template>
  <div class="my-info">
    <RouterLink class="home" to="/">
      홈으로
    </RouterLink>
    <div class="nav">
      <RouterLink :to="{ name: 'PurchaseList'}">
        구매 내역
      </RouterLink>
      <RouterLink :to="{ name: 'MyAccount'}">
        내 계좌
      </RouterLink>
      <RouterLink :to="{ name: 'ChangeUserInfo'}">
        내 정보 수정
      </RouterLink>
    </div>
    <RouterView/>
  </div>
</template>

<style lang="scss" scoped>
.my-info {
  position: relative;
  height: 96vh;
  padding: 1rem;
  .home {
    position: absolute;
    top: 2rem;
    right: 3rem;
    border: 1px solid red;
  }
  .nav {
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: block;
      padding: 1rem 1rem;
      margin: 1rem;      
      border: 1px solid red;
    }
  }
}
</style>
