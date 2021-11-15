<template>
  <HomeHeader />
  <div class="input-group">
    <i class="bx bx-search"></i>
    <input
      @keyup.enter="onKeyup(searchText)"
      class="form-input"
      type="text"
      placeholder="상품을 검색하세요"
      v-model="searchText"
    />
    <button
      @click.prevent="resetQuery"
      type="reset"
      class="btn-reset"
      v-if="isSearchInput"
    >
      <i class="bx bxs-x-circle"></i>
    </button>
  </div>

  <div v-if="isResult" class="items">
    <ul>
      <SearchResults
        v-for="searchResult in searchResults"
        :key="searchResult.id"
        :searchResult="searchResult"
      >
      </SearchResults>
    </ul>
  </div>
</template>

<script>
import HomeHeader from '~/components/HomeHeader'
import SearchResults from '~/components/SearchResults'

export default {
  components: {
    HomeHeader,
    SearchResults,
  },
  data() {
    return {
      isSearchInput: false,
      searchText: '',
      searchTags: [],
      isResult: false,
    }
  },
  computed: {
    searchResults() {
      return this.$store.state.user.searchResults
    },
  },
  methods: {
    logOut() {
      sessionStorage.removeItem('token')
      this.$store.dispatch('user/logOut')
      this.$router.push('/')
    },
    async onKeyup(searchText) {
      this.isSearchInput = true
      this.isResult = true
      await this.$store.dispatch('user/SHOW_SEARCHRESULTS', { searchText })
    },
    resetQuery() {
      this.searchText = ''
      this.isSearchInput = false
      this.isResult = false
    },
  },
}
</script>

<style lang="scss" scoped>
.input-group {
  width: 60%;
  margin: 0 auto 60px;

  .form-input {
    padding-left: 40px;
  }

  .btn-reset {
    position: absolute;
    top: 10px;
    right: 12px;

    .bxs-x-circle {
      font-size: 22px;
      color: $blue;
    }
  }
}

.items {
  height: 500px;
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid red;
}

ul {
  padding: 40px;
}
</style>
