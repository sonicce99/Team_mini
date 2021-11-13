<template>
  <form @submit.prevent="signUp">
    <fieldset>
      <legend>회원가입 정보 입력</legend>
      <input 
        v-model="email"
        type="email" 
        placeholder="이메일을 입력하세요 "
        autofocus /><br>
      <input 
        v-model="pw"
        type="password" 
        minlength="8"
        placeholder="비빌번호를 입력하세요 "
        title="최소 8자리 이상 입력해주세요!"/><br>
      <input
        v-model="displayName"
        type="text" 
        placeholder="닉네임을 입력하세요 "/><br>  
      <input type="file" @change="selectfile" /><br>  
      <input type="submit" value="회원가입!" />
    </fieldset>
  </form>
  <RouterLink :to="{ name: 'SignIn' }">
    로그인으로
  </RouterLink>    
</template>



<script>
import { axiosAuthInit } from '~/utils/authenticationApiConfig'

export default {
  data() {
    return {
      email:"",
      pw:"",
      displayName:"",
      profileImgBase64: null
    }
  },
  methods: {
    selectfile(event) {
      // console.log(event)
      // const files= event.target.files
      const { files }= event.target 
      for(const file of files) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener("load" , () => {
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
      const data = await axiosAuthInit.post('signup', obj)
      console.log(data.data)
      // this.$router.push("/") //router로 메인페이지로 이동됨
      } catch(error) {
        console.log(error.response.data)
      }
    }
  }
}
</script>

<style lang="scss">
legend {
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
}

input {
    margin: .2rem;
}
</style>