<template>
  <div class="product-edit">
    <form>
      <h1>상품 수정</h1>
        <label for="title">상품 이름: </label>
        <input type="text" id="title" name="title" v-model="title">
        <br>
        <label for="price">상품 가격: </label>
        <!-- vmodel.number는 사용자 입력이 숫자로 형변환 된다. -->
        <input type="text" id="price" name="price" v-model.number="price">
        <br>
        <label for="description">상품 설명: </label>
        <br>
        <textarea id="description" name="description" v-model="description"/>
        <br>
        <label>재고 여부: </label>
        <label for="soldout">매진</label>
        <input type="radio" id="soldout" v-model="isSoldOut" value= true>
        <label for="instock">재고 있음</label>
        <input type="radio" id="instock" v-model="isSoldOut" value= false>
        <br>
        <label for="thumbnail">상품 썸네일: </label>
        <div> <img class="thumb-view" :src="thumbnail" alt="thumbnail"></div>
        <input type="file" id="thumbnail" @change="selectFile">
        <br>
        <label for="photo">상품 상세사진: </label>
        <div> <img class="photo-view" :src="photo" alt="photo"></div>
        <input type="file" id="photo" @change="selectFile">
        <br>
        <label for="tags">상품 태그: </label>
        <input type="text" id="tags" name="tags" v-model="tags" placeholder="태그가 여러 개일 경우 띄어쓰기로 구분해주세요.">
    </form>
        <button @click="editProduct">수정완료</button>
  </div>
</template>

<script>
import axios from 'axios'
import { axiosAdminProduct, axiosPublicProduct } from '~/utils/productApiConfig'

export default {
  data(){
    return{
      productData: {},
      title: '',
      price: '',
      description: '',
      thumbnail: null,
      thumbnailBase64: null,
      photo: null,
      photoBase64: null,
      isSoldOut: false,
      tags: []
    } 
  },
    mounted(){
    this.getCurProduct()
    },
    methods: {
      // 서버에서 수정할 제품 정보 GET
      async getCurProduct(){ 
        const { data } = await axiosPublicProduct.get(this.$route.params.id)
        this.title = data.title
        this.price = data.price
        this.description = data.description
        this.tags = data.tags
        this.thumbnail = data.thumbnail
        this.photo = data.photo
        this.isSoldOut = data.isSoldOut
      },
      //서버에 수정사항 PUT
      async editProduct(){
        const tagArray = this.tags.split(' ')
        const obj = {
          title : this.title,
          price : this.price,
          description: this.description,
          tags: tagArray,
          thumbnailBase64: this.thumbnailBase64,
          photoBase64: this.photoBase64,
          isSoldOut: this.isSoldOut
        }
        await axiosAdminProduct.put(this.$route.params.id, obj)
        this.getCurProduct() // 실제 동작때는 수정완료 후에 화면이 닫혀야함.
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
          }
        )
      }
    }
  }    
}
</script>
<style lang="scss" scoped>

.product-edit{
  border: 2px solid red;
  width: 1000px;
  margin: 0 auto;

  h1 {
  font-size: 32px;
  font-weight: 700;
  }

  .edit-form{
    margin-top: 30px;
    margin: 0 auto;
    padding: 20px;
    width: 800px;
    height: 300px;
    border: 2px dashed #888;
  }
  .thumb-view {
    width: 100px;
    height: 100px;
  }
  .photo-view {
    width: 200px;
    height: 250px;
  }
}
</style>
