<template>
  <div class="form-group">
    <h1>로그인</h1>
    <form @submit="login(email, password)">
      <label for="user-email">이메일</label>
      <input
        type="email"
        id="user-email"
        placeholder="email을 입력하세요."
        v-model="email"
        autofocus
      />
      <label for="user-password">비밀번호</label>
      <input
        type="password"
        id="user-password"
        placeholder="비밀번호을 입력하세요."
        minlength="8"
        v-model="password"
      />
      <div class="buttons">
        <input
          @click="login(email, password)"
          type="button"
          value="로그인"
        >
          <RouterLink :to="{ name: 'SignUp' }">
            회원가입
          </RouterLink>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async login(email, password) {
      this.$store.dispatch("user/LOGIN", { email, password })
    }
  }
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

.form-group {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  .buttons {
    display: flex;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
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
      background-color: #f7f8fa;
    }
  }
}

h1 {
  width: 360px;
  font-weight: 300;
  font-size: 32px;
  line-height: 1.5;
  margin-bottom: 1em;
  color: #101010;
  letter-spacing: -0.05em;
}

label {
  display: block;
  width: 100%;
  font-size: 12px;
  line-height: 16px;
}

input {
  display: block;
  width: 360px;
  height: 44px;
  padding: 0 12px;
  border-radius: 6px;
  margin-bottom: 12px;
  font-size: 16px;
  border: 1px solid #d3dce6;
  transition: border-color 200ms ease-in-out;

  &:focus,
  &:hover,
  &:active {
    outline: none;
    box-shadow: none;
    border-color: #3da5f5;
  }
}

input[type="file"] {
  padding-top: 10px;
}

input[type="button"] {
  width: 160px;
  color: #fff;
  margin-right: 20px;
  background-color: #3da5f5;

  &:focus,
  &:hover,
  &:active {
    outline: none;
    box-shadow: none;
    background-color: #3186c4;
  }
}
</style>
