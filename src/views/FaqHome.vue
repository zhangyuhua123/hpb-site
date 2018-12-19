<template>
  <div class="faq-home">
    <h1>{{$t('navs.faq')}}</h1>
    <SearchBar
      :placeholder="$t('faq.searchInput')"
      @submit="doSearch" />
    <div class="faq-container">
      <div class="search-tips" v-if="searchWord">
        {{ totalCount ? $t('faq.searchResult', {word: searchWord, num: totalCount})
          : $t('faq.empty') }}
        <div class="new-question" v-if="!totalCount">
          <mu-button color='primary' to="/question/new">
            {{$t('navs.newques')}}
          </mu-button>
        </div>
      </div>
      <div class="categories" v-if="!searchWord">
        <mu-button
          :class="cateId === 0 ? 'actived' : ''"
          flat
          color="primary"
          @click="filterByCate(0)"
        >
          {{$t('common.all')}}
        </mu-button>
        <mu-button
          :class="cateId === item.id ? 'actived' : ''"
          v-for="(item, i) in cateList"
          :key="i"
          flat
          color="primary"
          @click="filterByCate(item.id)"
        >
          {{item.name}}
        </mu-button>
      </div>
      <div class="post-list">
        <mu-list textline="two-line">
          <mu-list-item
            button
            ripple
            v-for="(item, i) in list"
            :key="i"
            :to="'/faq/' + item.id"
          >
            <mu-list-item-content>
              <mu-list-item-title>{{item.title}}</mu-list-item-title>
              <mu-list-item-sub-title>
                {{item.author_name}}
                <small>{{$t('common.createdAt')}}</small> {{pubAt(item.release_at)}}
                - {{item.category_name}}
              </mu-list-item-sub-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </div>
      <mu-flex v-if="totalCount > pageSize" class="paginator" justify-content="center">
        <mu-pagination
          raised
          circle
          @change="goPage"
          :total="totalCount"
          :page-size="pageSize"
          :current.sync="currentPage"></mu-pagination>
      </mu-flex>
    </div>
  </div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import { API_QUESTION_LIST, API_QUESTION_CATEGORY } from '@/libs/constant'
import { $get } from '@/libs/api'
import { pubAt } from '@/components/mixin/formatDate'

export default {
  name: 'FaqHome',
  mixins: [pubAt],
  metaInfo () {
    return {
      title: this.$t('title') + '|' + this.$t('navs.faq')
    }
  },
  data () {
    return {
      list: [],
      searchWord: '',
      currentPage: 1,
      totalCount: 0,
      pageSize: 10,
      cateList: [],
      cateId: 0
    }
  },
  components: {
    SearchBar
  },
  computed: {
    language () {
      const lang = this.$store.getters.preferences.lang
      return lang === 'zh' ? 'cn' : 'en'
    }
  },
  watch: {
    language: function (newV) {
      this.fetchCategories()
      this.fetchList()
    }
  },
  mounted () {
    this.fetchCategories()
    this.fetchList()
  },
  methods: {
    doSearch (word) {
      if (word.trim().length < 2) {
        return
      }
      let params = {}
      if (word) {
        params.keywords = word
      }
      this.fetchList(params)
    },
    fetchList (options = {}) {
      const { language } = this
      let params = Object.assign({
        language
      }, options)
      $get(API_QUESTION_LIST, params).then(resp => {
        this.list = resp.data
        const pagination = resp.pagination
        if (pagination) {
          this.pageSize = pagination.per_page
          this.totalCount = pagination.total_count
        } else {
          this.totalCount = this.list.length
        }
        this.searchWord = params.keywords
      })
    },
    fetchCategories () {
      $get(API_QUESTION_CATEGORY, {
        language: this.language
      }).then(resp => {
        this.cateList = resp.data
      })
    },
    filterByCate (cateId) {
      this.cateId = cateId
      let params = {}
      if (cateId) {
        params.category_id = cateId
      }
      this.fetchList(params)
    },
    goPage (page) {
      let params = { page }
      if (this.cateId) {
        params.category_id = this.cateId
      }
      this.fetchList(params)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import './mixin'
.mu-button
  text-transform none
  font-weight bold
  &.actived
    background #fff
.faq-home
  display block
  h1
    text-align center
    color $white
    margin 0
  .faq-container
    background $white
    padding 30px
    @media screen and (max-width 1000px)
      padding 30px 0
  .paginator
    margin-top 30px
  .post-list
    min-height 400px
  .new-question
    margin-top 15px
  .categories
    margin 15px 0
  .mu-item-sub-title
    text-align left 
</style>
