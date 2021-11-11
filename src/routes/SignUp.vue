<template>
  <input 
    v-model="id"
    type="text" />
  <input 
    v-model="pw"
    type="password" />
  <input
    v-model="displayName"
    type="text" />  
  <button @click="signUp">회원가입!</button>  
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      id:"",
      pw:"",
      displayName:""
    }
  },
  methods: {
    async signUp() {
      const res = await axios({
        url:"https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup",
        method: "POST",
        headers: {
          "content-type": "application/json",
          "apikey": "FcKdtJs202110",
          "username": "dongsu"
        },
        data: {
          email: this.id,
          password: this.pw,
          displayName: this.displayName
        }
      })
      console.log(res)
    }
  }
}
</script>