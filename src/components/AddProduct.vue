<template>
  <form @submit="addProduct" name="input">
    <input 
      type="text"
      v-model="title" />
    <input 
      type="text"
      v-model="price" />
    <input
      type="text"
      v-model="description" />
    <input
      type="text"
      v-model="tags" />
    <input
      type="text"
      v-model="thumbnailBase64" />
    <input
      type="text"
      v-model="photoBase64" />
  <button type="submit" class="add">추가하기</button>
  </form>
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
        tags : this.tags,
        thumbnailBase64 : this.thumbnailBase64,
        photoBase64 : this.photoBase64
      }
      this.$store.dispatch('admin/addProduct', obj)
    }
  }
}
</script>
