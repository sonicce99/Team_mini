<template>
  <div class="addproduct-from">
    <h1 class="add-form">제품 등록</h1>
    <div class="wrapper">
    <button class="btn-secondary" @click="back">닫기</button>
      <form @submit.prevent="addProduct" name="input">
        <p>제목</p>
        <input
          type="text"
          v-model="title" />
        <p>가격</p>
        <input
          type="Number"
          v-model="price" />
        <p>설명</p>
        <input
          type="text"
          v-model="description" />
        <p>태그 <span>입력 예) THE ROW,Bottega Veneta,CHRISTIAN LOUBOUTIN</span></p>
        <input
          type="text"
          v-model="tags" />
        <p>썸네일</p>
        <input type="file" id="thumbnail" @change="selectFile">
        <p>상세 이미지</p>
        <input type="file" id="photo" @change="selectFile">
      <button type="submit" class="btn-secondary">추가하기</button>
      </form>  
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '',
      price: '',
      description: '',
      tags: '',
      thumbnailBase64: '',
      photoBase64 :''
    }
  },
  methods: {
    addProduct() {
      const obj = { 
        title : this.title,
        price : this.price,
        description : this.description,
        tags : this.tags.split(','),
        thumbnailBase64 : this.thumbnailBase64,
        photoBase64 : this.photoBase64
      }
      this.$store.dispatch('admin/addProduct', obj)
    },
    back() {
      this.$router.go(-1)
    },
    selectFile(event) {
      const { files } = event.target 
      for (const file of files) {
        const reader = new FileReader()
        reader.readAsDataURL(file) 
        reader.addEventListener('load', () => {          
          if (event.target.id === 'thumbnail') {            
            this.thumbnailBase64 = reader.result
          } else {
            this.photoBase64 = reader.result
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.addproduct-from {
   h1 {
    @include text-style(32, $dark);
    width: 100%;
    font-weight: 300;
    margin-bottom: 2em;
  }
  .wrapper {
    @include text-style(14, $dark);
    width: 100%;
    padding: 1rem;
    margin-bottom: 15px;
    border: 1px solid $border;
    border-radius: .5rem;
  }
  p {
    margin: 2px 0;
  }
  input {
    display: block;
    border: 1px solid $secondary;
    border-radius: .2rem;
  }
  .btn-secondary {
    padding: 0.5rem;
    margin-top: .8rem;
    border: 1px solid $border;
    border-radius: .5em;
  }
}
</style>
