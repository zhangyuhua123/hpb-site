
<template>
  <div id="app">
   <img src="@/assets/img/openlogo.png"  class="opendiv"  @click="jumphome" style='cursor: pointer;'/>
    <mu-appbar style="width: 100%;" color="black">
      <!-- <mu-tabs :value.sync="active" indicator-color="white" color="black">
        <mu-tab @click="jumphome">{{ $t('open.module.file') }}</mu-tab>
      </mu-tabs> -->
      <mu-menu slot="right">
        <span v-if="ishow"><img src="https://countryflags.io/cn/flat/24.png" alt="" style='display:inline-block;vertical-align:middle'>
        <mu-button flat>中文</mu-button></span>
        <span v-else><img src="http://www.countryflags.io/GB/flat/24.png" alt="" style='display:inline-block;vertical-align:middle;margin-top:-4px'>
        <mu-button flat>English</mu-button></span>
        <mu-list slot="content" :class="{prpdev:isprpdev}">
          <mu-list-item button @click="changeLang('zh')">
            <mu-list-item-content>
              <mu-list-item-title>
                <div class="mu-item-action"><img src="https://countryflags.io/cn/flat/24.png" alt="">中文</div>
              </mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button @click="changeLang('en')">
            <mu-list-item-content>
              <mu-list-item-title>
                <div class="mu-item-action" ><img src="http://www.countryflags.io/GB/flat/24.png" alt="">English</div>
              </mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>
    <router-view />
  </div>

</template>

<script>
export default {
    name: "app",
    data() {
        return {
            active: true,
            isopendrop: true,
            isprpdev:true,
            ishow: Boolean,
        };
    },
    mounted: function () {
      this.ishow = this.lang === 'en' ? false : true
    },
    computed: {
      lang () {
        return this.$store.getters.preferences.lang
      }
    },
    methods: {
      changeLang (lang) {
        this.$store.commit('SET_PREFERENCE', {lang: lang})
        this.ishow = lang === 'en' ? false : true
      },
      jumphome(){
        // console.log(1);
        this.$router.push({
          path:'/'
        })
      }
    },
    watch: {
      lang: function (newV) {
        this.$i18n.locale = newV
      }
    },
};
</script>
<style>
    html,body,#app{
       height:100%;
    }
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /* overflow: auto; */

}
.mu-button-wrapper{
  text-transform: capitalize;
}
.opendiv{
  position: absolute;
  top:2%;
  left:3%;
  width: 200px;
}
.mu-avatar {
    margin-left: 58px;
}
.mu-appbar-title {
    margin-left: 18%;
}
.mu-appbar-right {
    margin-right: 1%;
}
.opendrop {
    position: absolute;
    top: 50%;
    margin-top: -17.5px;
    width: 100px;
}
.opendrop a {
    position: absolute;
    top: 50%;
    margin-top: -8px;
    padding-left: 10%;
    color: #fff;
    font-size: 16px;
}
.opendrop a:hover {
    color: #fff;
}
.prpdev{
  min-width: 145px;
}
.prpdev img{
  margin-right: 14%
}
</style>
