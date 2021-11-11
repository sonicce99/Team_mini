<template>
  <div class="my-info">
    <RouterLink :to="{ name: 'PurchaseList'}">
      구매 내역
    </RouterLink>
    <RouterLink :to="{ name: 'MyAccount'}">
      내 계좌
    </RouterLink>
    <RouterLink :to="{ name: 'ChangeUserInfo'}">
      내 정보 수정
    </RouterLink>
    <RouterLink to="/">
      홈으로
    </RouterLink>
  </div>
  <RouterView/>
</template>
