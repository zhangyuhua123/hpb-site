<template>
  <div class="post">
    <PostNav
      position='top'
      :homeText="postNavHomeText"
      :homeUrl="postNavHomeUrl" />
    <h1>{{post.title}}</h1>
    <div class="author">
      {{$t('blog.publishAt', {date: pubAt(post.release_at), who: post.author_name})}}
    </div>
    <div class="content" v-html="post.content"></div>
    <PostNav
      position='bot'
      :homeText="postNavHomeText"
      :homeUrl="postNavHomeUrl" />
    <SocialShare :url="localUrl" :title="post.title" />
    <!-- <div class="comments">
      <h2 class="label">{{$t('form.comment.title')}}</h2>
      <CommentForm :url='commentPostUrl' @done="addComment" />
      <div class="list">
        <div
          class="comment-card"
          v-for="item in commentList"
          :key="item.id">
          <div class="avatar">
            <mu-icon value='face'></mu-icon>
          </div>
          <div class="card-header">
            <span class="comment-author">{{item.name}}</span>
            <span class="c-at">{{pubAt(item.release_at)}}</span>
          </div>
          <div class="comment-content">{{item.content}}</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import PostNav from '@/components/PostNav'
import {
  API_BLOG_DETAIL,
  API_QUESTION_DETAIL,
  API_SUBMIT_COMMENT_BLOG,
  API_SUBMIT_COMMENT_FAQ,
  API_BLOG_COMMENT_LIST,
  API_FAQ_COMMENT_LIST
} from '@/libs/constant'
import { $get } from '@/libs/api'
import CommentForm from '@/components/CommentForm'
import SocialShare from '@/components/SocialShare'
import { pubAt } from '@/components/mixin/formatDate'
const HOST = 'http://192.168.0.127:3000/'
// TODO
// Recent post list
// comment
// share
export default {
  name: 'Post',
  props: ['faq'],
  mixins: [pubAt],
  metaInfo () {
    return {
      title: this.post.title,
      meta: [{
        name: 'keyWords',
        content: 'HPB, Blockchain'
      }]
    }
  },
  data () {
    return {
      post: {},
      currentPage: 1,
      commentList: []
    }
  },
  components: {
    PostNav,
    CommentForm,
    SocialShare
  },
  computed: {
    postNavHomeText () {
      return this.faq ? this.$t('faq.home') : this.$t('blog.home')
    },
    postNavHomeUrl () {
      return this.faq ? '/faq' : '/blog'
    },
    commentPostUrl () {
      return this.faq ? API_SUBMIT_COMMENT_FAQ + '?question_id=' + this.id
        : API_SUBMIT_COMMENT_BLOG + '?blog_id=' + this.id
    },
    commentListUrl () {
      return this.faq ? API_FAQ_COMMENT_LIST
        : API_BLOG_COMMENT_LIST
    },
    objId () {
      return this.faq ? 'question_id' : 'blog_id'
    },
    localUrl () {
      return HOST + this.$route.fullPath
    }
  },
  created () {
    const url = this.faq ? API_QUESTION_DETAIL : API_BLOG_DETAIL
    this.id = this.$route.params.id
    $get(url, {
      id: this.id
    }).then(resp => {
      this.post = resp.data
    })
  },
  mounted () {
    this.fetchCommentList()
  },
  methods: {
    fetchCommentList () {
      let params = {
        page: this.currentPage
      }
      params[this.objId] = this.id
      $get(this.commentListUrl, params).then(resp => {
        this.commentList = resp.data
      })
    },
    addComment (obj) {
      console.log(obj)
    }
  }
}
</script>
<style lang="stylus">
@import './mixin'
.post
  background $white
  min-height 400px
  margin 0px auto
  width 80%
  padding 10px 30px
  @media screen and (max-width 1000px)
    width 100%
  h1
    margin-top 0
    margin-bottom 30px
  .author
    margin-bottom 30px
    font-size 16px
    color #9b9b9b
    font-weight bold
  .content
    font-size 16px
    p
      // margin-bottom 15px
      text-align justify
    img
      max-width 100%
    a
      word-break break-all
  .comments
    .label
      text-align center
    .list
      margin 20px 30px
      @media screen and (max-width 1000px)
        margin 20px 0
      .comment-card
        padding 10px 20px 10px 60px
        position relative
        background-color white
        margin-bottom 15px
        .avatar
          position absolute
          top 10px
          left 20px
        .card-header
          display flex
          justify-content space-between
          .comment-author
            font-weight bold
          .c-at
            color #999

</style>
