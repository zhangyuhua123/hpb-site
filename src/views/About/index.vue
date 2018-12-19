<template>
  <div class="about">
    <h1>{{$t('navs.about')}}</h1>
    <mu-tabs
      :value='active'
      inverse
      color="#1bfafc"
      indicator-color="#1bfafc"
      full-width>
      <mu-tab
        v-for="(item,i) in aboutSubPages"
        :key='i'
        :to='item.url'>{{$t('about')[item.key]}}</mu-tab>
    </mu-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
import { ABOUT_SUB_PAGES } from '@/libs/constant'
import { NODE_SUB_PAGES } from '@/libs/constant'

export default {
  name: 'About',
  data () {
    return {
      aboutSubPages: ABOUT_SUB_PAGES
    }
  },
  computed: {
    active () {
      const urls = ABOUT_SUB_PAGES.map(e => e.url)
      return urls.findIndex(item => item === this.$route.path)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../mixin'

.about
  padding 30px
  margin 0px 100px
  min-height 400px
  color $white
  @media screen and (max-width 769px)
    margin 0 10px
  h1
    margin 0 0 30px 0
    text-align center
</style>
