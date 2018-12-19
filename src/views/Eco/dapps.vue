<template>
  <mu-container class="dapps" fluid>
    <mu-row gutter>
      <mu-col
        class="vg-col"
        span='12'
        md="6"
        lg="4"
        v-for="(item, i) in $t('eco.dappList')"
        :key="i">
        <mu-card>
          <mu-card-media>
            <img :src="'/img/eco/dapp_' + (i + 1) + '.png'">
          </mu-card-media>
          <mu-card-title :title="item.title" />
          <mu-card-text>
            {{item.desc}}
          </mu-card-text>
          <mu-card-actions v-if="item.url">
            <mu-button :href="item.url" color="primary">
              {{$t('common.visit')}}
            </mu-button>
          </mu-card-actions>
        </mu-card>
      </mu-col>
    </mu-row>
  </mu-container>
</template>
<script>

export default {
  name: 'Dapps'
}
</script>
<style lang="stylus" scoped>

.dapps
  margin-top 4vw

</style>
