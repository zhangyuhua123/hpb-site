<template>
  <div class="intro">
    <h1>{{$t('about.intro')}}</h1>
    <p v-for="(item, i) in $t('about.introDesc')" :key='i'>{{item}}</p>
  </div>
</template>
<script>
export default {
  name: 'Intro',
  metaInfo () {
    return {
      title: this.$t('title') + '|' + this.$t('navs.about')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../mixin'

.intro
  padding 0 30px 30px 30px
  margin 0px 120px
  margin-bottom 50px
  min-height 400px
  color $white
  @media screen and (max-width 769px)
    margin 0
  h1
    margin 30px 0 80px 0
    text-align center
  p
    margin-bottom 30px
    font-size 18px
</style>
