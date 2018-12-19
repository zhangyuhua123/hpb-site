<template>
  <div class="vision">
    <h1>{{$t('about.visionTitle')}}</h1>
    <div
      :class="'para ' + (i === 1 && 'reverse')"
      v-for="(item,i) in $t('about.visionDesc')"
      :key="i">
      <div class="col6">
        <h2>{{item.h2}}</h2>
        <p>{{item.content}}</p>
      </div>
      <div class="col4">
        <template v-if="i === 2">
          <div class="img-group">
            <img
              class="img41"
              v-for="(order,i) in [1,2,3,4]"
              :key="i"
              :src="'/img/vision/s3_' + order + '.png'" alt="">
          </div>
        </template>
        <template v-else>
          <img :src="'/img/vision/s' + (i + 1) + '.png'" alt="">
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Vision',
  metaInfo () {
    return {
      title: this.$t('title') + '|' + this.$t('navs.about')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../mixin'

.vision
  padding 0 30px 0px 30px
  margin 0px 120px
  margin-bottom 50px
  min-height 400px
  color $white
  @media screen and (max-width 769px)
    margin 0
  h1
    margin 30px 0 80px 0
    text-align center
  h2
    margin 20px 0
  p
    margin-bottom 30px
    font-size 18px
  .para
    display flex
    align-items center
    &.reverse
      flex-direction row-reverse
    img
      max-width 150px
    .img-group
      width 160px
      display flex
      flex-wrap wrap
      margin 0 auto
      .img41
        flex 50%
        max-width 50px
        height 50px
        margin 15px
    .col6
      flex 60%
    .col4
      flex 40%
      text-align center
    @media screen and (max-width 769px)
      flex-wrap wrap
      .col6, .col4
        flex 100%

</style>
