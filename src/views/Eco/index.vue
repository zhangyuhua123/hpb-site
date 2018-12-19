<template>
  <div class="eco">
    <h1>{{$t('navs.ecoystem')}}</h1>
    <mu-tabs
      :value='active'
      inverse
      color="#1bfafc"
      indicator-color="#1bfafc"
      full-width>
      <mu-tab
        v-for="(item,i) in ecoSubPages"
        :key='i'
        :to='item.url'>{{$t('eco')[item.key]}}</mu-tab>
    </mu-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
import { ECO_SUB_PAGES } from '@/libs/constant'

export default {
  name: 'Ecoystem',
  metaInfo () {
    return {
      title: this.$t('title') + '|' + this.$t('navs.ecoystem')
    }
  },
  data () {
    return {
      ecoSubPages: ECO_SUB_PAGES
    }
  },
  computed: {
    active () {
      const urls = ECO_SUB_PAGES.map(e => e.url)
      return urls.findIndex(item => item === this.$route.path)
    }
  },
  mounted () {

  }
}
</script>
<style lang="stylus" scoped>
@import '../mixin'

.eco
  padding 30px
  margin 0px 50px
  min-height 400px
  margin-bottom 50px
  color $white
  @media screen and (max-width 769px)
    margin 0
    .mu-tabs
      flex-wrap wrap
      .mu-tab
        flex 100%
  h1
    margin 0 0 30px 0
    text-align center

</style>
