<template>
  <div class="links">
    <mu-row gutter>
      <mu-col span='12' md="6" lg="4" v-for="(item, i) in $t('eco.linkList')" :key="i">
        <mu-card>
          <a :href="item.url" target="blank">
            <mu-card-media>
              <img v-if="item.img" :src="item.img">
              <i v-else :class="'iconfont icon-' + (item.icon || item.name.toLowerCase())"></i>
            </mu-card-media>
            <mu-card-title
              :title="item.name"
              :sub-title="item.sub"></mu-card-title>
          </a>
        </mu-card>
      </mu-col>
    </mu-row>
  </div>
</template>
<script>

export default {
  name: 'Links',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>
<style lang="stylus" scoped>
@import '../mixin'

.links
  margin-top 4vw
.mu-card
  background-color $white
  a
    display flex
    justify-content space-between
    padding 10px
    align-items center
.mu-card-media
  img
    width 60px
    min-width 60px
.col
  margin-bottom 15px
.iconfont
  font-size 60px
  color $ldark
.mu-card-title-container
  overflow hidden
  text-align right
.mu-card-title
  font-size 20px
  white-space nowrap
  text-overflow ellipsis
  overflow hidden
.mu-card-sub-title
  overflow hidden
  white-space nowrap
  text-overflow ellipsis
</style>
