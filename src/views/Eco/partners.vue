<template>
  <div class="partners">
    <mu-row gutter>
      <mu-col
        class="vg-col"
        span='12'
        md="6"
        lg="4"
        v-for="(item, i) in $t('eco.partnersList')"
        :key="i">
        <mu-card>
          <mu-card-media>
            <img :src="'/img/eco/par_' + (i + 1) + '.png'">
          </mu-card-media>
          <mu-card-title :title="item.title" />
          <mu-card-text>
            {{item.desc}}
          </mu-card-text>
          <mu-card-actions>
            <mu-button v-if="item.url" :href="item.url" color="primary">
              {{$t('common.visit')}}
            </mu-button>
          </mu-card-actions>
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

.partners
  margin-top 4vw
</style>
