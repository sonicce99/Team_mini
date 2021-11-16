<template>
  <HomeHeader />
  <div class="input-group">
    <i class="bx bx-search"></i>
    <input
      @keyup.delete="onKeyReset(searchText)"
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

  <div v-if="!isResult">
    <KeywordList @onClickKeyword="clickBrandLogo" />
  </div>

  <div v-if="isResult" class="items">
    <div v-show="!data.length">검색 결과가 없습니다.</div>
    <SearchResults :searchResults="searchResults" />
  </div>
</template>

<script>
import HomeHeader from '~/components/HomeHeader'
import SearchResults from '~/components/SearchResults'
import KeywordList from '~/components/KeywordList'

export default {
  components: {
    HomeHeader,
    SearchResults,
    KeywordList,
  },
  data() {
    return {
      isSearchInput: false,
      searchText: '',
      searchTags: [],
      isResult: false,
      data: [],
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
      if (!searchText) return
      this.isSearchInput = true
      this.isResult = true
      this.searchText = searchText
      this.data = await this.$store.dispatch('user/SHOW_SEARCHRESULTS', {
        searchText,
      })
    },
    clickBrandLogo(brand) {
      this.isSearchInput = true
      this.isResult = true
      this.searchText = brand
      this.$store.dispatch('user/searchByBrand', {"searchTags": [brand]})
    },
    resetQuery() {
      this.searchText = ''
      this.isSearchInput = false
      this.isResult = false
    },
    onKeyReset(searchText) {
      this.searchText = searchText
      if (!this.searchText.length) this.resetQuery()
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
</style>
