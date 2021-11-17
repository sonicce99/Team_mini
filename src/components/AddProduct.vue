<template>
  <div class="form-group">
    <form @submit.prevent="addProduct" name="input">
          <h1 class="add-form">제품 등록</h1>
          <label for="title">
            제품명
          </label> 
        <input
          class="form-input"
          v-model="title" 
          type="text"
          placeholder="제품명을 입력하세요." />
      
        <label for="price">가격</label> 
        <input 
          class="form-input"
          v-model="price"
          type="Number"
          placeholder="가격을 입력하세요." />
        
        <label for="description">설명</label> 
        <input 
          class="form-input"
          v-model="description" 
          type="text"
          placeholder="설명을 입력하세요." />

        <label for="thumbnail">썸네일</label> 
        <input 
          class="form-input"
          type="file"
          id="thumbnail"
          @change="selectFile" />

        <label for="photo">상세 이미지</label> 
        <input 
          class="form-input"
          type="file"
          id="photo"
          @change="selectFile" />

          <button class="btn-anchor btn-16" @click="back">닫기</button>
          <button class="btn-primary btn-16" type="submit">등록하기</button>
      
      </form>    
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

  .form-group {
    @include column-flexbox();
    width: 100%;

   h1 {
      text-align: center;
      font-weight: 400;
      }

      label {
        @include text-style(14, $primary);
        display: block;
      }
        
      .form-input {
        display: block;
        padding-left: 10px;
        margin-bottom: 10px;
      }

      
      .btn-anchor {
        width: 50%;
      }

      .btn-primary {
        width: 50%;
      }

  }
</style>
