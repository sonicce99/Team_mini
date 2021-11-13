<template>
  <input 
    v-model="id"
    type="text" 
    placeholder="아이디를 입력하세요 "/><br>
  <input 
    v-model="pw"
    type="password" 
    placeholder="비빌번호를 입력하세요 "/><br>
  <input
    v-model="displayName"
    type="text" 
    placeholder="닉네임을 입력하세요 "/><br>  
  <input type="file" @change="selectfile" /><br>  
  <button @click="signUp">회원가입!</button>  

  <RouterLink :to="{ name: 'SignIn' }">
    로그인으로
  </RouterLink>    
</template>



<script>
import { axiosAuthInit } from '~/utils/authenticationApiConfig'

export default {
  data() {
    return {
      id:"",
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
      const obj = {
        email: this.id,
        password: this.pw,
        displayName: this.displayName,
        profileImgBase64: this.profileImgBase64
      }
      const data = await axiosAuthInit.post('signup', obj)
      console.log(data.data)
    }
  }
}
</script>