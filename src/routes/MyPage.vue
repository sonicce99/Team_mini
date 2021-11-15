<template>
  <div class="container">
    <div class="info-card">
      <div class="profile">
        <div class="image">
          <img
            :src="currentUser.profileImg"
            :alt="`${currentUser.displayName}`"
          />
        </div>
        <strong>{{ currentUser.displayName }}</strong>
        <span>{{ currentUser.email }}</span>
      </div>

      <div class="my-info">
        <RouterLink
          class="btn-list btn-anchor btn-16"
          :to="{ name: 'PurchaseList' }"
        >
          구매 내역
        </RouterLink>
        <RouterLink
          class="btn-list btn-anchor btn-16"
          :to="{ name: 'MyAccount' }"
        >
          내 계좌
        </RouterLink>
        <RouterLink
          class="btn-list btn-anchor btn-16"
          :to="{
            name: 'ChangeUserInfo',
            query: {
              name: currentUser.displayName,
            },
          }"
        >
          내 정보 수정
        </RouterLink>
      </div>
    </div>

    <RouterView />
    <RouterLink class="btn-anchor btn-16 move-home" to="/"> 홈으로 </RouterLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 'active',
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.user.currentUser
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  @include flexbox(center, center);
  width: 100%;
  padding: 100px 40px 20px;

  .info-card {
    @include column-flexbox(start, center);
    position: relative;
    width: 250px;
    height: 380px;
    margin-right: 50px;
    padding: 20px 0;
    border-radius: 6px;
    border: 1px solid $border;

    .btn-list {
      display: block;
      width: 140px;
      border-left: none;
      border-right: none;
      border-radius: 0;
      font-weight: 500;
    }

    .profile {
      @include column-flexbox();
      margin-bottom: 50px;

      strong {
        @include text-style(18, $dark);
        margin-bottom: 4px;
      }

      span {
        @include text-style(14, $primary);
      }
    }

    .image {
      @include flexbox();
      width: 80px;
      height: 80px;
      margin-bottom: 14px;
      padding: 6px 12px;
      border: 1px solid $primary;
      border-radius: 50%;

      img {
        display: block;
        width: 100%;
        object-fit: contain;
      }
    }

    .my-info {
      @include column-flexbox();

      a {
        @include flexbox();
        padding: 0 6px;
        font-size: 14px;
      }
    }
  }
}

.move-home {
  position: absolute;
  top: 40px;
  left: 40px;
}
</style>
