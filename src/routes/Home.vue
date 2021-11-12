<template>
<!-- 이 헤더는 route 확인을 위해 있을 뿐입니다 -->
  <TheHeader />
  <RouterLink to="/certification/signin">
    로그인
  </RouterLink>
  <RouterLink to="/mypage/purchaselist">
    마이페이지
  </RouterLink>
  <button @click="logOut">로그아웃</button>
  <input type="text" placeholder="상품을 검색하세요">
  <div class="items">
    <!-- <아이템들 v-for/> -->
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    TheHeader
  },
  computed: {
  },
  methods: {
    logOut() {
      sessionStorage.removeItem('accessToken')
      this.$store.dispatch('user/logOut')
      this.$router.push('/')
    }
  }
}
</script>
