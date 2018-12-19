<template>
  <div class="exchanges">
    <mu-row gutter>
      <mu-col span='12' md="6" lg="4" v-for="(item, i) in list" :key="i">
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
  </div>
</template>
<script>
export default {
  name: 'Exchanges',
  data () {
    return {
      list: [
        {
          title: 'OKEX',
          url: 'http://www.okex.com'
        },
        {
          title: 'Bibox',
          url: 'https://www.bibox365.com'
        },
        {
          title: 'Bit-z',
          url: 'https://www.bit-z.pro'
        },
        {
          title: 'Kucoin',
          url: 'https://www.kcs.to'
        },
        {
          title: 'Kkex',
          url: 'https://kkex.com'
        },
        {
          title: 'Dex',
          url: 'https://dex.top'
        },
        {
          title: 'Gdex',
          url: 'http://www.gdex.io'
        }
      ]
    }
  },
  components: {

  }
}
</script>
<style lang="stylus" scoped>
@import '../mixin'

.exchanges
  margin-top 4vw
  .mu-card
    background-color $white
  .col
    margin-bottom 15px
  .mu-card a
    display flex
    justify-content space-between
    padding 10px
    align-items center
  .mu-card-media
    img
      max-width 100px
      max-height 54px
</style>
