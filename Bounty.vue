<template>
  <div class="bounty">
    <mu-container class="dapps" fluid>
      <mu-row gutter>
        <mu-col
          class="vg-col"
          span='12'
          md="6"
          lg="4"
          v-for="(item, i) in $t('client')"
          :key="i">
          <mu-card>
          <a :href="item.url" target='blank'>
            <mu-card-media>
              <img :src="'/img/eco/ex_' + (i + 1) + '.png'">
            </mu-card-media>
            <mu-card-title :title="item.title" />
          </a>
        </mu-card>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>
<script>
export default {
  name: 'Bounty',
  metaInfo () {
    return {
      title: this.$t('title') + '|' + this.$t('navs.client')
    }
  },
  data () {
    return {
       openSimple: false
    }
  },
  components: {

  },
  methods:{
     openSimpleDialog () {
      this.openSimple = true;
    },
    closeSimpleDialog () {
      this.openSimple = false;
    }
  }
}
</script>
<style lang="stylus" scoped>
@import './mixin'

.bounty
  padding 30px
  margin 0px 50px
  min-height 400px
  margin-bottom 50px
  color $white
  @media screen and (max-width 769px)
    margin 0
  h1
    margin 0 0 30px 0
    text-align center
  ul
    padding-left 0
    list-style none
  .mu-card-actions 
    height 100px 
    .mu-button
      text-transform none
      min-width 70px
      margin-top 2%
    .mu-button + .mu-button
      margin-left 10px
    .mu-raised-button.disabled
        background grey
        color white
</style>
