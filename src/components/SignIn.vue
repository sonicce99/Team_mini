<template>
  <div>로그인 페이지</div>
  
  <!-- form 인풋 서브밋 -->
  <input type="text" value="이메일 비번 등">
  <input type="text" value="이메일 비번 등">
  

  <RouterLink :to="{ name: 'SignUp' }">
    신규가입으로
  </RouterLink>

</template>
