<template>
  <headroom>
    <header id="navBar">
      <div class="logo">
        <router-link to="/" class="logo">
          <img src="@/assets/img/logo_big.png" :alt="title">
          <div class="title-container">
            <div class="title">{{title}}</div>
            <div class="sub-title" v-if="subTitle">{{subTitle}}</div>
          </div>
        </router-link>
      </div>
      <div class="mobile-menu" @click='toggleMenu'>
        <mu-icon size="36" :value="menuOpen ? 'close' : 'menu'" color="white"></mu-icon>
      </div>
      <nav class="navs" :class="{'expand': menuOpen}">
        <a
          v-for="(item, i) in navs"
          class="nav-item"
          @click="handleNav(item)"
          :key='i'
        >
          <mu-menu
            v-if="item[2]"
            placement="bottom"
            open-on-hover
            :open.sync="subMenuOpen[i]"
            popover-class="sub-menu-list"
          >
            {{item[1]}}
            <mu-list slot="content">
              <mu-list-item
                button
                v-for="(sub, si) in item[2]"
                :key='si'
                @click="handleSubNav(sub[0], i)"
              >
                <mu-list-item-title>{{sub[1]}}</mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-menu>
          <div v-else>{{item[1]}}</div>
        </a>
        <a
          class="nav-item"
          href='#'
          @click.prevent="changLang">
          {{lang === 'en' ? '切换中文' : 'English'}}
        </a>
      </nav>
    </header>
  </headroom>
</template>
<script>
import { headroom } from 'vue-headroom'
import { ECO_SUB_PAGES, ABOUT_SUB_PAGES,NODE_SUB_PAGES } from '@/libs/constant'
import '../libs/constant.js'
export default {
  name: 'NavBar',
  props: {
    title: String,
    subTitle: String,
    navs: Array
  },
  data () {
    return {
      menuOpen: false,
      subMenuOpen: []
    }
  },
  components: {
    headroom
  },
  computed: {
    lang () {
      return this.$store.getters.preferences.lang
    }
  },
  watch: {
    lang: function (newV) {
      this.$i18n.locale = newV
    }
  },
  mounted(){
    // console.log(this.navs)
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
    },
    changLang () {
      const lang = this.lang === 'en' ? 'zh' : 'en'
      this.$store.commit('SET_PREFERENCE', { lang })
    },
    handleNav (item,url) {
      if (item[2]) {
        return
      }
      const link = item[0]
      const needRoute = link.match('/')
      if(link.includes("open")){
         window.open(link)
      } else if(needRoute) {
        this.$router.push(link)
      } else {
        this.$SmoothScroll(
          document.getElementById(link), 500, null, null, 'y')
      }
      this.menuOpen = false
    },
    handleSubNav (link, i) {
      // console.log('link',link.preferences.lang)
      // console.log('dddddd',link.indexOf('index'))
      if(link.indexOf('http')==0){
        if(link.indexOf('nodeplan')>0){
          if(link.indexOf('index')<0){
            var url = this.$store.getters.preferences.lang != 'en' ? 'http://nodeplan.hpb.io/index.html' : 'http://nodeplan.hpb.io/en/index.html'
          }else {
            var url = this.$store.getters.preferences.lang != 'en' ? 'http://nodeplan.hpb.io/regist.html' : 'http://nodeplan.hpb.io/en/regist.html'
          }
          window.open(url)
        }else if(link.indexOf('node_plan')>0){
          var url = this.$store.getters.preferences.lang != 'en' ? 'https://www.hpb.io/node_plan_zh.pdf' : 'https://www.hpb.io/node_plan_en.pdf'
        }
        window.open(url)
      }else{
        this.$router.push(link)
      }
      this.subMenuOpen[i] = false
      this.menuOpen = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
$highlight = #1bfafc
@keyframes roll
  0%
    transform rotate(1turn) scale(1.3)
  to
    transform rotate(0deg) scale(1.3)
.headroom--not-top
  background rgba(9,39,63,.9)
  #navBar
    .logo
      img
        width 50px
        height 50px
      .title-container .title
        font-size 26px
    @media screen and (min-width 1000px)
      .navs
        line-height 4vw
        height 4vw
    @media screen and (max-width 769px)
      .logo img
        width 35px
        height 35px
#navBar
  padding 7px 3vw
  display flex
  justify-content space-between
  .mobile-menu
    display none
  .logo
    cursor pointer
    position relative
    display flex
    align-items center
    .title-container
      color #f5f5f5
      line-height 1.25
      margin-left 2vw
      .title
        font-size 4vw
        vertical-align middle
        display inline-block
        font-weight 700
      .sub-title
        font-size 1.2vw
        margin-left 3px
        font-family open sans,sans-serif
    img
      width 4.6vw
      height 4.6vw
      vertical-align middle
    &:hover
      img
        border-radius 100%
        transform scale(1.12)
        animation roll .8s infinite linear
  .navs
    font-family Dosis
    display flex
    align-items center
    height 9vw
    line-height 5vw
    .nav-item
      display inline-block
      font-size 11pt
      font-weight bold
      color #E0E0E0
      & + .nav-item
        margin-left 1.5vw
      &:hover, &.router-link-active
        color $highlight
      .mu-menu
        display block
@media screen and (max-width 1000px)
  #navBar
    position relative
    display block
    background rgba(9,39,63,.9)
    .mobile-menu
      display block
      position absolute
      right 12px
      top 8px
      line-height 5vw
      cursor pointer
    .logo
      img
        width 50px
        height 50px
      .title-container
        .sub-title
          display none
        .title
          font-size 26px
    .navs
      display none
      height auto
      margin-top 10px
      line-height 2.4
      &.expand
        display block
      .nav-item
        display block
        width 100%
        font-size 16px
        & + .nav-item
          margin 0
          border-top 1px solid rgba(255,255,255,0.2)
@media screen and (max-width 769px)
  #navBar .logo img
    width 35px
    height 35px
</style>
