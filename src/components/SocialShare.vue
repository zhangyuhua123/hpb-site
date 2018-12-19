<template>
  <div class="social-share-container">
    <div class="left">
      {{$t('common.shareTo')}}
      <mu-tooltip content="Facebook">
        <mu-button icon :href="facebook">
          <i class="iconfont icon-facebook"></i>
        </mu-button>
      </mu-tooltip>
      <mu-tooltip content="Twitter">
        <mu-button icon :href="twitter">
          <i class="iconfont icon-twitter"></i>
        </mu-button>
      </mu-tooltip>
      <mu-tooltip content="Reddit">
        <mu-button icon :href="reddit">
          <i class="iconfont icon-reddit"></i>
        </mu-button>
      </mu-tooltip>
    </div>
    <div class="right">
      <mu-tooltip :content="$t('socialShare.mobile')">
        <mu-button icon color="#39719F" @click="openModal = true">
          <mu-icon value="mobile_friendly"></mu-icon>
        </mu-button>
      </mu-tooltip>
    </div>
    <mu-dialog class="qr-model" :title="$t('socialShare.qrcode')" width="360" :open.sync="openModal">
      <qrcode-vue :value="url" :size="200" level="H"></qrcode-vue>
      <div class="qr-tip">{{$t('socialShare.qrtip')}}</div>
    </mu-dialog>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'SocialShare',
  components: {
    QrcodeVue
  },
  props: ['url', 'title'],
  data () {
    return {
      openModal: false
    }
  },
  computed: {
    facebook () {
      return 'https://www.facebook.com/sharer/sharer.php?u=' + this.url
    },
    twitter () {
      return 'https://twitter.com/intent/tweet?text=' +
      this.title + '&url=' + this.url + '&via=' + window.location.origin
    },
    google () {
      return 'https://plus.google.com/share?url=' + this.url
    },
    weibo () {
      return 'https://service.weibo.com/share/share.php?url=' +
      this.url + '&title=' + this.title + '&pic={{IMAGE}}&appkey={{WEIBOKEY}}'
    },
    linkedin () {
      return 'http://www.linkedin.com/shareArticle?mini=true&ro=true&title=' +
      this.title + '&url=' + this.url + '&summary=&source=&armin=armin'
    },
    reddit () {
      return 'http://www.reddit.com/submit?url=' +
      this.url + '&title=' + this.title
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../views/mixin'

.social-share-container
  padding 5px 20px
  display flex
  justify-content space-between
  background #f5f5f5
  margin-bottom 30px
  .left
    color $ldark
    .mu-button
      vertical-align middle
      i
        font-size 20px
.qr-tip
  margin-top 15px
</style>
