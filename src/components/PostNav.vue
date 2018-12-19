<template>
  <div :class="'post-nav ' + position">
    <mu-button flat color='primary' v-if='prevUrl' :to='prevUrl'>
      <mu-icon left value='keyboard_arrow_left'></mu-icon>
      {{$t('blog.prev')}}
    </mu-button>
    <mu-button flat :to="homeUrl" color='primary'>
      <mu-icon value='list' left></mu-icon>
      {{homeText}}
    </mu-button>
    <mu-button flat color='primary' v-if='nextUrl' :to='nextUrl'>
      {{$t('blog.next')}}
      <mu-icon right value='keyboard_arrow_right'></mu-icon>
    </mu-button>
  </div>
</template>
<script>

export default {
  name: 'PostNav',
  props: [
    'position',
    'homeUrl',
    'homeText',
    'prevUrl',
    'nextUrl'
  ],
  components: {

  }
}
</script>
<style lang="stylus" scoped>
$border-color = #d1d1d1

.post-nav
  display flex
  justify-content space-between
  padding 15px 0
  &.top
    border-bottom 1px solid $border-color
    margin-bottom 30px
  &.bot
    border-top 1px solid $border-color
    margin-top 30px

</style>
