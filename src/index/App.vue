<template>
  <div id="app" v-scroll="scroll">
    <mu-linear-progress :size="2" color='#EE0B5B' v-if="showLoading" />
    <NavBar
      :title="$t('home.title')"
      :subTitle="$t('home.subTitle')"
      :navs='navs'
      :isnavs='isnavs' />
    <router-view/>
    <Footer />
    <mu-snackbar :color="toastType" position='top' :open.sync="toast">
      {{toastMsg}}
    </mu-snackbar>
    <div class="back-top" v-show='showBackTop' @click='backToTop'>
      <mu-icon value="arrow_upward"></mu-icon>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { EventBus } from '@/libs/event-bus.js'
import { toast } from '@/components/mixin/toast'
import { ECO_SUB_PAGES, ABOUT_SUB_PAGES, NODE_SUB_PAGES,OPEN_PLATFORM } from '@/libs/constant'
export default {
  name: 'App',
  mixins: [toast],
  components: {
    NavBar,
    Footer
  },
  data () {
    return {
      showLoading: false,
      scrollTop: 0,
      isnavs: true
    }
  },
  mounted: function () {
    if (window.location.pathname === '/policy') {
      this.isnavs = false
    } else {
      this.isnavs = true
    }
  },
  computed: {
    navs () {
      const navs = [
        ['/about', this.$t('navs.about'),
          ABOUT_SUB_PAGES.map(i => [i.url, this.$t('about')[i.key]])],
        ['/boe', this.$t('navs.engine'),],
        ['/node', this.$t('navs.node'),
          NODE_SUB_PAGES.map(i => [i.url, this.$t('node')[i.key]])],
        ['/bounty', this.$t('navs.bounty')],
        ['/blog', this.$t('navs.blog')],
        // ['/careers', this.$t('navs.careers')],
        ['/client', this.$t('navs.client')],
        ['/ecoystem', this.$t('navs.ecoystem'),
          ECO_SUB_PAGES.map(i => [i.url, this.$t('eco')[i.key]])
        ],
        [document.location.protocol + "//open.hpb.io", this.$t('navs.open')],

      ]
      switch (this.$route.name) {
        case 'home':
          return [['home', this.$t('navs.home')]].concat(navs)
        default:
          return [['/', this.$t('navs.home')]].concat(navs)
      }
    },
    showBackTop () {
      return this.scrollTop > 800
    }
  },
  created () {
    EventBus.$on('toast', this.showToast)
    EventBus.$on('load:start', () => {
      this.showLoading = true
    })
    EventBus.$on('load:end', () => {
      this.showLoading = false
    })
  },
  methods: {
    scroll () {
      this.scrollTop = window.scrollY
    },
    backToTop () {
      this.$SmoothScroll(
        document.getElementById('app'), 500, null, null, 'y')
    }
  }
}
</script>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic')
@import url('https://fonts.googleapis.com/css?family=Dosis|Nunito|Titillium+Web')
@import url('https://fonts.googleapis.com/icon?family=Material+Icons')
@import '../views/mixin'

html
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  body
   -webkit-overflow-scrolling:touch
   overflow-y:scroll
    font-family: Titillium Web, Microsoft Yahei, Nunito, Helvetica Neue, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

*, *:before, *:after
  box-sizing: border-box;
  margin: 0;
.text-right
  text-align right
.mu-dialog-body
  max-height 76vh
  overflow auto
.particles-js-canvas-el
  position absolute
  top 0
  left 0
  z-index 1
.search-tips
  text-align center
  margin-bottom 30px
  font-size 16px
.ql-editor
  min-height 150px
.mu-linear-progress
  position fixed
  top 0
  left 0
#app
  position relative
  z-index 10
  display block
  padding-top 12vw
  background $dark
  background-size 1920px 1080px
  @media screen and (max-width 769px)
    padding-top 20vw
.qr-model
  text-align center
.sub-menu-list
  background-color rgba(57, 113, 159, 0.8)
  li .mu-item-title
    text-align center
    color white
.mu-tabs-inverse
  background rgba(255,255,255,0.1)
  color $white
.mu-tabs
  font-weight bold
.back-top
  position fixed
  bottom 20px
  line-height 50px
  width 50px
  height 50px
  text-align center
  color white
  cursor pointer
  background-color rgb(10,73,111)
  right 20px
  z-index 10
  .mu-icon
    vertical-align middle
.vg-col
  margin-bottom 15px
  .mu-card
    background-color $white
  .mu-card-title-container
    padding 10px 16px
    .mu-card-title
      font-size 20px
      font-weight bold
      text-align center
  .mu-card-actions
    height 57px
    text-align center
    .mu-button
      text-transform none
      vertical-align middle
      display inline-block
  .mu-card-media
    height 140px
    text-align center
    overflow hidden
    // background-color white
    display flex
    align-items center
    justify-content center
    img
      max-height 100%
      width auto
      min-width auto
      display inline-block
  .mu-card-text
    height 220px
    padding 10px 16px
    overflow auto
    @media screen and (max-width 769px)
      height auto
</style>
