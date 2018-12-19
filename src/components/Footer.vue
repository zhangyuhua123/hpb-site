<template>
  <footer class="footer">
    <div class="social-group">
      <a
        class="social-item"
        v-for="(item, i) in socialList"
        :href='item.url'
        target="blank"
        :key='i'>
        <mu-tooltip :content="item.name">
          <i :class="'iconfont icon-' + item.name.toLowerCase()"></i>
        </mu-tooltip>
      </a>
    </div>
    <div class="logo-container">
      <router-link to="/" class="logo">
        <div class="main">
          <img src="@/assets/img/logo_big.png" alt="">
          <span>{{$t('home.title')}}</span>
        </div>
        <div class="sub">High Performance Blockchain</div>
      </router-link>
    </div>
    <div>2017-2018© {{$t('footer.copyright')}}</div>
  </footer>
</template>

<script>
import { SOCIAL_LIST } from '@/libs/constant'

export default {
  name: 'Footer',
  data () {
    return {
      socialList: SOCIAL_LIST
    }
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
  methods: {
    changLang (lang) {
      this.$store.commit('SET_PREFERENCE', { lang })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
$dark = #09263F
$ldark = #39719F
$white = #e8eaf6
$ddark = #031829

.logo
  padding 2vw
  color white
  font-family Titillium Web
  display inline-block
  text-align center
  .sub
    font-size 1vw
  .main
    position relative
    font-size 3.6vw
    line-height 4vw
    font-weight bold
    img
      margin-right 1vw
      vertical-align middle
      width 3vw
      height 3vw
    span
      display inline-block
      vertical-align middle
    @media screen and (max-width 769px)
      font-size 40px
      line-height 40px
      img
        width 32px
        height 32px
.footer
  background $dark
  padding 2vw 0
  font-size 1.3vw
  text-align center
  color #b2b2b2
  position relative
  z-index 10
  .social-group
    display flex
    margin 2vw 12vw
    flex-wrap wrap
    .social-item
      flex 1
      text-align center
      color $white
      &:hover
        opacity 0.8
      i
        font-size 32px
      @media screen and (max-width 769px)
        flex 33%
        margin 10px 0
</style>
