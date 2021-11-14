<template>
  <div class="form-group">
    <form @submit.prevent="signUp">
      <h1>회원 가입</h1>
      <label for="user-email">이메일</label>
      <input
        v-model="email"
        type="email"
        id="user-email"
        placeholder="email을 입력하세요."
        autofocus
      />
      <label for="user-password">비밀번호</label>
      <input
        v-model="pw"
        type="password"
        id="user-password"
        placeholder="비밀번호을 입력하세요."
        minlength="8"
      />
      <label for="user-name">이름</label>
      <input
        v-model="displayName"
        type="text"
        id="user-name"
        placeholder="이름을 입력하세요."
      />
      <label for="user-profile-picture">프로필 사진</label>
      <input
        type="file"
        id="user-profile-picture"
        accept=".png, .jpg"
        @change="selectfile"
      >
        <input
          type="submit"
          value="회원가입!"
        />
    </form>
    <RouterLink :to="{ name: 'SignIn' }">
      로그인
    </RouterLink>
  </div>
</template>



<script>
import { axiosAuthInit } from "~/utils/authenticationApiConfig"

export default {
  data() {
    return {
      email: "",
      pw: "",
      displayName: "",
      profileImgBase64: null
    }
  },
  methods: {
    selectfile(event) {
      // console.log(event)
      // const files= event.target.files
      const { files } = event.target
      for (const file of files) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener("load", () => {
          this.profileImgBase64 = reader.result
        })
      }
    },
    async signUp() {
      try {
        const obj = {
          email: this.email,
          password: this.pw,
          displayName: this.displayName,
          profileImgBase64: this.profileImgBase64
        }
        const data = await axiosAuthInit.post("signup", obj)
        console.log(data.data)
        this.$router.push("/") //router로 메인페이지로 이동됨
      } catch (error) {
        console.log(error.response.data)
      }
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Spoqa Han Sans", sans-serif;
  font-size: 16px;
  font-family: "Spoqa Han Sans", sans-serif;
  letter-spacing: -0.03em;
  color: #212529;
}

.form-group {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  a {
    position: absolute;
    top: 40px;
    left: 140px;
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
  margin-bottom: 20px;
}

input[type="submit"] {
  width: 360px;
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
