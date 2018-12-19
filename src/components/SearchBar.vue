<template>
  <div class="search-bar">
    <mu-auto-complete
      class="search-input"
      :data="list"
      full-width
      solo
      :placeholder="placeholder"
      icon='search'
      @select='doSelect'
      @keyup.enter='doSearch'
      v-model="word">
      <template slot-scope="scope">
        <mu-list-item-content v-html="scope.highlight"></mu-list-item-content>
      </template>
    </mu-auto-complete>
  </div>
</template>
<script>
import { $get } from '@/libs/api'

export default {
  name: 'SearchBar',
  props: ['placeholder', 'autoUrl'],
  data () {
    return {
      list: [],
      word: ''
    }
  },
  computed: {
    language () {
      return this.$store.getters.preferences.lang
    }
  },
  watch: {
    word (value, prev) {
      // if (value.length > 1) {
      //   this.autoSearch(value)
      // }
    }
  },
  methods: {
    doSelect (value, item) {
      console.log(item)
    },
    doSearch () {
      if (this.last === this.word) {
        return
      }
      this.$emit('submit', this.word)
      this.last = this.word
    },
    autoSearch (word) {
      const params = {
        keywords: word,
        language: this.language
      }
      $get(this.autoUrl, params).then(resp => {
        this.list = resp.data.map(item => {
          return {
            id: item.id,
            value: item.title
          }
        })
      })
    }
  }
}
</script>
<style lang="stylus" scoped>

.search-bar
  padding 50px 0
  width 60%
  margin 0 auto
  @media screen and (max-width 1000px)
    width 80%
  .search-input
    background-color white
    border-radius 5px
</style>
