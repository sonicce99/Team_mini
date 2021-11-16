<template>
  <ul class="search-results">
    <li v-for="searchResult in searchResults" :key="searchResult.id">
      <h3>{{ searchResult.title }}</h3>
      <strong>{{ searchResult.price }} </strong>
      <p>{{ searchResult.description }}</p>
      <span v-for="tag in searchResult.tags" :key="tag"> {{ tag }}</span>
      <div>
        <RouterLink class="detail" :to="{ name: 'UserSingleProductDetails', params: { id: searchResult.id }}">
          <img
            :src="`${searchResult.thumbnail}`"
            :alt="`${searchResult.title}`"
          />
        </RouterLink>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['searchResults'],
}
</script>

<style lang="scss" scoped>
.search-results {
  padding: 40px;

  li {
    border: 1px solid $border;
    margin-bottom: 40px;
  }
}
</style>
