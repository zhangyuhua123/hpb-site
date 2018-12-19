<template>
  <keep-alive include="detail">
    <div class="detail">
      <h1>{{ this.$t('Rnode.detail', {msg: node}) }}</h1>
      <!-- select start -->
      <mu-container>
        <mu-row gutter>
          <mu-col span="12" sm="6">
            <mu-select @change="changePeriod" popover-class='test' :solo=true label="Option Slot" v-model="custom.value1" full-width>
              <mu-option v-for="num in stages" avatar :key="num" :label="$t('Rnode.stage', {msg: num})" :value="num">
                <mu-list-item-content>
                  <mu-list-item-title>{{ $t('Rnode.stage', {msg: num}) }}</mu-list-item-title>
                </mu-list-item-content>
              </mu-option>
            </mu-select>
          </mu-col>
          <mu-col span="12" sm="6">
            <mu-select popover-class='test' @change="changeData" :solo=true label="Option Slot" v-model="custom.value2" full-width>
              <mu-option v-for="(num, index) in rounds" avatar :key="index" :label="$t('Rnode.round', {msg: num})" :value="index">
                <mu-list-item-content>
                  <mu-list-item-title>{{ $t('Rnode.round', {msg: num}) }}</mu-list-item-title>
                </mu-list-item-content>
              </mu-option>
            </mu-select>
          </mu-col>
        </mu-row>
      </mu-container>
      <!-- select end -->
      <!-- table start -->
     <mu-container>
      <mu-paper :z-depth="1">
        <mu-data-table :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list">
          <template slot-scope="scope">
            <td class="is-center">{{scope.row.stage }}</td>
            <td class="is-center">{{scope.row.datetime }}</td>
            <td class="is-center">{{scope.row.name }}</td>
            <td class="is-center">{{scope.row.address }}</td>
            <td class="is-center">{{scope.row.counts }}</td>
          </template>
        </mu-data-table>
      </mu-paper>
    </mu-container>
      <!-- table end -->
    </div>
  </keep-alive>
</template>
<script>
import { ABI } from "@/libs/abi.js";
import { $get } from '@/libs/api';
import { ADDRESS, API_VOTE_RECORDS, API_RECORDS_DATA } from "@/libs/constant.js";
import { timetrans } from "@/components/mixin/formatDate.js";
export default {
    name: "detail",
    mixins: [timetrans],
    data() {
        return {
            includedComponents: "detail",
            stages: [1],
            addr: null,
            node: null,
            rounds: null,
            web3Hpb: null,
            hpbTestContract: null,
            custom: {
                value1: null, // 默认从第一期 第一轮开始
                value2: null
            },
            sort: {
                name: "",
                order: "desc"
            },
            columns: [
                {
                    title: this.$t("Rnode.table.stage"),
                    align: "center",
                    name: "stage"
                },
                {
                    title: this.$t("Rnode.table.datetime"),
                    name: "datetime",
                    align: "center"
                },
                {
                    title: this.$t("Rnode.table.name"),
                    name: "name",
                    align: "center"
                },
                {
                    title: this.$t("Rnode.table.voteraddress"),
                    name: "address",
                    align: "center"
                },
                {
                    title: this.$t("Rnode.table.detailcounts"),
                    name: "counts",
                    align: "center"
                }
            ],
            list: []
        };
    },
    mounted: function() {
        /*
    list [{
      stage: 阶段，
      datetime: 投票日期，
      name: 节点名称,
      voteraddress: 投票人地址，
      detailcounts: 票数
    },{}]
    */
        this.addr = this.$route.query.addr;
        let round = Number(this.$route.query.current_round) - 1;
        let term = Number(this.$route.query.current_period);
        this.getTermsRounds(term);
        this.custom.value2 = this.$t("Rnode.round", {
            msg: round + 1
        });
        this.custom.value1 = this.$t("Rnode.stage", { 
            msg: term
        });
        if (this.$route.query.all_rounds == round+1){ // 最后一轮
            console.log('走了这一步')
            this.initWeb3(term)
            this.getRecordDetail(round)
        } else { // 数据库数据
            this.initRecord(this.$route.query.current_period,
                            round + 1,
                            this.addr)
            this.custom.value1 = this.$t("Rnode.stage", { msg: 1 });
        }
        
    },
    methods: {
        changeLangage() {
            for (let i = 0; i < 5; i++) {
                this.columns[i].title = this.$t(
                    "Rnode.table." + this.columns[i].name
                );
            }
            if (typeof(this.custom.value2) === "string") {
                this.custom.value2 = this.$t("Rnode.round", {
                    msg:  Number(this.$route.query.current_round)
                });
            }
            if (typeof(this.custom.value1) === "string"){
                this.custom.value1 = this.$t("Rnode.stage", { msg: this.$route.query.current_period });
            }
            
        },
        handleSortChange({ name, order }) {
            this.list = this.list.sort(
                (a, b) =>
                    order === "asc" ? a[name] - b[name] : b[name] - a[name]
            );
        },
        initData(addr, block) {
            var data = null;
            var counts = null;
            this.list = [];
            var addr_nums = this.hpbTestContract.fechVoteResultForCandidateBySnapshotBlock(addr,block);
            var timestamp = this.web3Hpb.hpb.getBlock(block).timestamp;
            this.get_list(addr_nums, timestamp, this.$route.query.current_round)
        },
        changeData(round) {
            const regex = /\d+/
            let term = String(this.custom.value1).match(regex)[0]
            if (this.rounds == round+1){
                this.initWeb3(term)
                this.getRecordDetail(round)
            } else {
                this.getTermsRounds(term);
                this.initRecord(term, round+1,this.addr);
            }
        },
        getRecordDetail(round) {
            this.list = [];
            const regex = /\d+/
            let term = String(this.custom.value1).match(regex)[0]
            this.initWeb3(term)
            this.block = this.hpbTestContract.fechSnapshotBlockByIndex(round);
            var addr_nums = this.hpbTestContract.fechVoteResultForCandidateBySnapshotBlock(
                this.addr,
                this.block
            );
            var timestamp = this.web3Hpb.hpb.getBlock(this.block).timestamp;
            this.get_list(addr_nums, timestamp, Number(round)+1)
        },
        get_list(addr_nums, timestamp, round) {
            let data = {};
            let counts = 0;
            for (let i = 0; i < addr_nums[0].length; i++) {
                counts = addr_nums[1][i].toNumber() / 1e18;
                data = {
                    datetime: this.timetrans(timestamp),
                    stage: round,
                    name: this.$route.query.name,
                    address: addr_nums[0][i],
                    counts: counts.toFixed(0)
                };
                this.list.push(data);
            }
            this.list = this.list.sort((a, b) => b["counts"] - a["counts"]);
        },
        changePeriod(term) {
            this.getTermsRounds(term);
            this.initRecord(term, 1, this.addr);
            this.custom.value2 = this.$t("Rnode.round", { msg: 1 });
        },
        getTermsRounds(term = 1) {
            let params = {"term": term}
            $get(API_VOTE_RECORDS, params).then(resp =>{
                this.stages = resp.data.term_count;
                this.rounds = resp.data.rounds;
            })
        },
        initRecord(term = 1, round = 1, addr=None) {
            let params = {"term": term, "round": round, "address": addr}
            $get(API_RECORDS_DATA, params).then(resp => {
                this.list = resp.data
                this.list = this.list.sort((a, b) => b["counts"] - a["counts"]);
            })
        },
        initWeb3(term) {
            let url = document.location.protocol + "//" + window.location.host +"/HpbBallot"
            this.web3Hpb = new web3_hpb(new web3_hpb.providers.HttpProvider(url));
            this.hpbTestContract = this.web3Hpb.hpb.contract(ABI).at(ADDRESS[term]);
        },
    },
    computed: {
        language() {
            const lang = this.$store.getters.preferences.lang;
            return lang === "zh" ? "cn" : "en";
        }
    },
    watch: {
        language: function() {
            this.changeLangage();
        }
    }
};
</script>
<style lang="stylus">
.detail
  margin 0 auto
  h1
    text-align center
    color #FFF
    @media screen and (max-width: 769px)
      font-size: 24px
.test
  background #092640
  .mu-item-content
    color #fff
  .mu-input
    color #ffff
 .mu-select-input
    height 33px
    font-size 24px
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
  .mu-table-empty
    color #fff
//   .mu-item-title
//      text-align center!important
  .mu-paper
    background-color transparent
    .mu-table
      background-color transparent
    tbody tr
      background-color RGBA(92, 112, 237, 0.18)
      &:hover
        background-color RGBA(14, 51, 133, 1)
    .mu-table td, .mu-table th
      font-size 13pt
    .mu-table tr, .mu-table th, .mu-table th.is-sortable
      color #FFF
</style>
