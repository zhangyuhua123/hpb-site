<template>
  <div class="history-records">
    <h1>{{$t('Hisnode.record')}}</h1>
    <mu-container>
      <mu-row gutter>
        <mu-col span="12" sm="6">
          <mu-select label="" v-model="normal.value1" full-width underline-color='#13192c' @change="changePeriod" popover-class='test'>
            <mu-option v-for="option in options" :key="option.name" :label="option.name" :value="option.address"></mu-option>
            <!-- <mu-option v-for="option in options" :key="option" :label="$t('Hisnode.Stange')" :value="option" ></mu-option> -->
          </mu-select>
        </mu-col>
      </mu-row>
      <mu-paper :z-depth="1">
        <mu-data-table :hover=false stripe :columns="columns" :data="list">
          <template slot-scope="scope">
            <td class="is-center">{{scope.row.ranking}}</td>
            <td class="is-center">{{scope.row.name}}</td>
            <td class="is-center">{{scope.row.votes_received}}</td>
          </template>
        </mu-data-table>
      </mu-paper>
    </mu-container>
  </div>
</template>
<script>
  // import { ABI } from '@/libs/abi'
  import { HistoryRecords } from '@/libs/history-records'
  import { $get } from "@/libs/api";
  import { API_TERMS } from "@/libs/constant";
  import { API_CANDIDARES } from "@/libs/constant";
  export default {
    name: 'history-records',
    data () {
      return {
        options: [
        ],
        normal: {
          value1: this.$t("Hisnode.Stange", { msg: 1 })
        },
        columns: [
            { title: this.$t('Hisnode.table.ranking'), name: 'ranking', align: 'center' },
            { title: this.$t('Hisnode.table.name'), name: 'name', align: 'center' },
            { title: this.$t('Hisnode.table.votes_received'), name: 'votes_received', align: 'center' }
        ],
        list: HistoryRecords
      }
    },
    computed: {
      language() {
        const lang = this.$store.getters.preferences.lang
        return lang === 'zh' ? 'cn' : 'en'
      }
    },
    mounted: function () {
      this.getTermsList()
      this.getCandidatesList('1')
    },
    watch: {
      language: function (newV) {
        this.getTermsList()
        this.normal = { value1: this.$t("Hisnode.Stange", { msg: 1 }) }
        this.columns = [
            { title: this.$t('Hisnode.table.ranking'), name: 'ranking', align: 'center' },
            { title: this.$t('Hisnode.table.name'), name: 'name', align: 'center' },
            { title: this.$t('Hisnode.table.votes_received'), name: 'votes_received', align: 'center' }
        ]
      }
    },
    methods: {
      handleSortChange ({ name, order }) {
        this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name])
      },
      changePeriod (value) {
        this.getCandidatesList(value)
      },
      changeLangage () {
        for(let i = 0; i < 3; i++) {
          this.columns[i].title = this.$t('Hisnode.table.' + this.columns[i].name)
        };
      },
      getTermsList () {
        $get(API_TERMS, {}).then(resp => {
          var termsList = resp.data
          var termsName = []

          termsList.forEach(item => {
            var termsDetail = { name: this.$t('Hisnode.Stange', { msg: item.code }), code: item.code, address: item.address }
            termsName.push(termsDetail)
          })
          this.options = termsName
        })
      },
      getCandidatesList (code_or_address) {
        $get(API_CANDIDARES, { code_or_address: code_or_address }).then(resp => {
          var candidatesList = []
          resp.data.forEach((item, index)=> {
            var candidateDetail = { ranking: index + 1, name: item.name, votes_received: item.total_votes }
            candidatesList.push(candidateDetail)
          })
          this.list = candidatesList
        })
      }
    }
  }
</script>
<style lang="stylus">
.history-records
  text-align center
  margin 0 auto
  h1
    color #FFF
  .align-items-start
    justify-content space-around!important
.test
  background #092640
  .mu-item-content
    color #fff
  .mu-input
    color #ffff
 .mu-select-input
    height 33px
    font-size 24px
    text-align center
    color #fff
    text-indent 36px
    @media screen and (max-width 769px)
      font-size 18px
  .mu-option.is-selected .mu-item
    color RGBA(13, 255, 247, 1)!important
    .mu-select-icon
      color RGBA(13, 255, 247, 1)!important
  .mu-input-content
    padding 0 16px
    color #fff
    .mu-item-content
      text-align center
    .mu-item-title
     text-align center!important
  .mu-paper
    background-color transparent
    .mu-table
      background-color transparent
    .mu-table td, .mu-table th
      font-size 13pt
    .mu-table tr, .mu-table th, .mu-table th.is-sortable
      color #FFF
      // background-color RGBA(92, 112, 237, 0.18)

</style>
