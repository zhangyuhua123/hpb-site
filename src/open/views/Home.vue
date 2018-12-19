<template>
  <div class="home">
    <mu-container class="dapps" fluid>
      <mu-row gutter style="margin-left: -15%; margin-top: 120px">
        <mu-col @click="to_file(item.id)" class="vg-col moveleft" span='12' md="6" lg="2" offset= '1' v-for="(item, i) in list" :key="i">
          <mu-card :class="{opendev:isopendev}">
            <mu-card-media>
               <img :src="'http://47.75.175.59:3000' + item.icon" class="cardimg">
            </mu-card-media>
            <mu-card-title :title="item.name" />
            <mu-card-text>
              <div>{{ item.description }}</div>
            </mu-card-text>
          </mu-card>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>
<style lang="stylus">
.home {
  padding: 30px;
  color: $white;
  background: url('/img/dev.png');
  height:100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow: auto;
  @media screen and (max-width: 769px) {
    margin: 0;
  }
  .container-fluid{
    width:80%
    height:100%
  }
  .grid-cell {
    border-radius: 4px;
    height: 36px;
    // background: rgba(255, 255, 255, 0.8);
  }
  .opendev {
    padding: 10% 5% 5%;
    background: RGBA(255, 255, 255, 1);
    margin-bottom: 15%;
    border-radius: 7px;
    height: 450px;
    width: 297px;
    box-shadow:black 1px 1px 10px;
    .opendev:hover{
      box-shadow:black 1px 1px 10px;
    }
    .mu-card-title {
      color: RGBA(51, 51, 51, 1);
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .mu-card-text {
      font-size: 14px;
      div{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    }
    .cardimg {
      min-width:20px;
      width:58%;
      margin:31px auto;
      height:161px;
    }
  }
}
</style>
<script>
import { $get } from "@/libs/api";
import { API_DOCUMENT_LIST } from "@/libs/constant.js";
export default {
    name: "Home",
    data() {
        return {
            isopendev: true,
            list: [],
        };
    },
    mounted: function() {
        this.fetchDocuemntList()
    },
    computed: {
      language () {
        const lang = this.$store.getters.preferences.lang
        return lang === 'zh' ? 'cn' : 'en'
      }
    },
    watch: {
      language: function () {
        this.fetchDocuemntList()
      }
    },
    methods: {
      fetchDocuemntList () {
        const { language } = this
        let params = { language }
        $get(API_DOCUMENT_LIST, params).then(resp => {
          this.list = (resp.data)
          this.list.forEach((item)=>{
            item.description = item.description.substr(0,250)+'...'
          })
          this.list.sort((a, b) => a['position'] - b['position'])

        })
      },
      to_file (id) {
        this.$router.push({
          path: "/about",
          query: {
            id: id
          }
        })
      }
    }
}
</script>

