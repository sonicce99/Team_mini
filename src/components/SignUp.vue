<template>
  <div>신규 회원 가입</div>

  <input type="text" value="이메일 비번 등">

  <RouterLink :to="{ name: 'SignIn' }">
    로그인으로
  </RouterLink>
</template>
