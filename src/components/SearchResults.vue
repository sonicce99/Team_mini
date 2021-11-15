<template>
  <li>
    <h3>{{ searchResult.title }}</h3>
    <strong>{{ searchResult.price }} </strong>
    <p>{{ searchResult.description }}</p>
    <span v-for="tag in searchResult.tags"> {{ tag }}</span>
    <div>
      <img :src="`${searchResult.thumbnail}`" :alt="`${searchResult.title}`" />
    </div>
  </li>
</template>

<script>
export default {
  props: ['searchResult'],
}
</script>

<style lang="scss" scoped>
li {
  border: 1px solid $border;
  margin-bottom: 40px;
}
</style>
