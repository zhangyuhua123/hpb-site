<template>
  <div class="boe">
    <h1>{{$t('navs.engine')}}</h1>
    <div class="header">{{$t('boe.header')}}</div>
    <div class="design">
      <div class="label">{{$t('boe.design.title')}}</div>
      <div class="content flex-h">
        <div class="left">
          <div class="desc">{{$t('boe.design.desc')}}</div>
          <ul>
            <li v-for="(item, i) in $t('boe.design.ul')" :key="i" v-html="item"></li>
          </ul>
        </div>
        <div class="right">
          <img src="/img/boe/1.png" alt="">
        </div>
      </div>
    </div>
    <div class="func">
      <div class="content flex-h">
        <div class="left">
          <img src="/img/boe/2.png" alt="">
        </div>
        <div class="right">
          <div class="label">{{$t('boe.func.title')}}</div>
          <p v-for="(item, i) in $t('boe.func.desc')" :key="i">{{item}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Boe',
  metaInfo () {
    return {
      title: this.$t('title') + '|' + this.$t('navs.engine')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import './mixin'

.boe
  padding 30px
  margin 0px 120px
  margin-bottom 50px
  min-height 400px
  color $white
  @media screen and (max-width 769px)
    margin 0 10px
  h1
    margin 0 0 30px 0
    text-align center
  p
    margin-bottom 30px
  .header
    font-size 18px
  .label
    font-size 22px
    font-weight bold
    margin-bottom 15px
  .design, .func
    margin 15px 0
    font-size 18px
    .content
      ul
        padding-left 20px
        margin-top 20px
        font-family Nunito
  .func
    margin-top 80px

.flex-h
  display flex
  align-items center
  justify-content space-between
  .left
    margin-right 30px
    flex 1
  .right
    flex 1
  @media screen and (max-width 769px)
    flex-wrap wrap
    .left,.right
      margin-right 0
      margin-bottom 30px
      flex 100%
  img
    max-width 90%

</style>
