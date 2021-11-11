<template>
  <div>
    <input type="file" @change="selectfile" />
  </div>
  <div>
    <img :src="profileImgBase64" alt="profileImgBase64" />
  </div>
  <button @click="updateUser">사용자 정보 수정!</button>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      profileImgBase64: null
    }
  },
  methods: {
    selectfile(event) {
      // console.log(event)
      // const files= event.target.files
      const { files }= event.target  // 뒤에 files가 있으니까 구조분해항당으로 이렇게 작성 가능함.
      // 유사배열 Array-like
      for(const file of files) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener("load" , () => {
          console.log(reader.result)
          this.profileImgBase64 = reader.result
        })
      }
    },
    async updateUser() {
      const token = sessionStorage.getItem("accessToken")
      const { data } = await axios({
        url:"https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/user",
        method: "PUT",
        headers: {
          "content-type": "application/json",
          "apikey": "FcKdtJs202110",
          "username": "dongsu",
          authorization: `Bearer ${token}`
        },
        data: {
          profileImgBase64: this.profileImgBase64
        }
      })
      console.log(data)
    }
  }
}
</script>