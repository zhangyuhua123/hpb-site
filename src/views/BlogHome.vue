<template>
  <div class="blog-home">
    <h1>{{$t('navs.blog')}}</h1>
    <SearchBar
      :placeholder="$t('blog.searchInput')"
      :autoUrl="autoSearchUrl"
      @submit="handleSearchSubmit" />
    <div class="blog-container">
      <div class="search-tips" v-if="searchWord">
        {{ totalCount ? $t('blog.searchResult', {word: searchWord, num: totalCount})
          : $t('blog.empty') }}
      </div>
      <div class="blog-list">
        <mu-card
          v-for="(item) in postList"
          :key="item.id"
          @click.prevent='navTo(item)'
          class="post-card">
          <!-- <div class="position" v-if="item.position">
            <i class="iconfont icon-fixed"></i>
          </div> -->
          <mu-card-media v-if='item.cover_url'>
            <img :src="item.cover_url" alt="">
          </mu-card-media>
          <mu-card-title
            :title="item.title || '未命名标题'"
            :sub-title="$t('blog.publishAt', {date: pubAt(item.release_at), who: item.author_name || '匿名者'})" />
          <!-- <mu-card-text>
            {{item.summary}}
          </mu-card-text> -->
          <!-- <div class="card-footer">
            {{$t('blog.view', {num: item.read_times})}}
          </div> -->
        </mu-card>
      </div>
      <mu-flex v-if="totalCount > pageSize" class="paginator" justify-content="center">
        <mu-pagination
          raised
          circle
          @change="fetchBlogList"
          :total="totalCount"
          :page-size="pageSize"
          :current.sync="currentPage"></mu-pagination>
      </mu-flex>
    </div>
  </div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import {
  API_FETCH_BLOG_LIST,
  API_BLOG_SEARCH_AUTO
} from '@/libs/constant'
import { $get } from '@/libs/api'
import { pubAt } from '@/components/mixin/formatDate'

export default {
  name: 'BlogHome',
  mixins: [pubAt],
  metaInfo () {
    return {
      title: this.$t('title') + '|' + this.$t('navs.blog')
    }
  },
  data () {
    return {
      autoSearchUrl: API_BLOG_SEARCH_AUTO,
      list: [],
      searchWord: '',
      currentPage: 1,
      totalCount: 0,
      pageSize: 10
    }
  },
  components: {
    SearchBar
  },
  computed: {
    postList () {
      return this.list.map(item => {
        // item.summary = this.removeTAG(item.content).substring(0, 150)
        return item
      })
    },
    language () {
      const lang = this.$store.getters.preferences.lang
      return lang === 'zh' ? 'cn' : 'en'
    }
  },
  mounted () {
    this.fetchBlogList()
  },
  watch: {
    language: function (newV) {
      this.fetchBlogList()
    }
  },
  methods: {
    removeTAG (str) {
      str = str.replace(/<\/?[^>]*>/g, '')
      str = str.replace(/[ | ]*\n/g, '\n')
      str = str.replace(/\n[\s| | ]*\r/g, '\n')
      str = str.replace(/ /ig, '')
      return str
    },
    handleSearchSubmit (word) {
      if (word.trim().length < 2) {
        return
      }
      this.searchWord = word
      this.fetchBlogList()
    },
    fetchBlogList () {
      const { currentPage, language } = this
      let params = {
        page: currentPage,
        language
      }
      if (this.searchWord) {
        params.keywords = this.searchWord
      }
      $get(API_FETCH_BLOG_LIST, params).then(resp => {
        this.list = resp.data
        const pagination = resp.pagination
        if (pagination) {
          this.pageSize = pagination.per_page
          this.totalCount = pagination.total_count
        } else {
          this.totalCount = this.list.length
        }
      })
    },
    navTo (item) {
      this.$router.push('/post/' + item.id)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import './mixin'
.blog-home
  position relative
  h1
    text-align center
    color $white
    margin 0
  .blog-container
    background $white
    padding 30px 30px 80px 30px
    color $dark
  .paginator
    margin-top 30px
  .blog-list
    background $white
    display flex
    flex-wrap wrap
    justify-content space-between
    .post-card
      background white
      flex 0 1 100%
      cursor pointer
      position relative
      .position
        position absolute
        top -10px
        right -10px
        color $danger
        border-radius 50%
        text-align center
        width 50px
        height 50px
        line-height 50px
        border 2px solid $danger
        i
          font-size 24px
      &:hover
        background #fafafa
      & + .post-card
        margin-top 30px
      .mu-card-media > img
        max-height 200px
      a
        display block
      .card-footer
        padding 10px 16px
      @media screen and (max-width 769px)
        flex 0 1 100%
</style>
