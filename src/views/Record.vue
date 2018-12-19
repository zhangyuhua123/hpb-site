<template>
  <div class="record">
    <h1>{{this.$t('Rnode.record')}}</h1>
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
   <div class=" container">
     <mu-paper :z-depth="1">
      <mu-data-table @row-click="toDetail" :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list">
        <template slot-scope="scope">
          <td class="is-center">{{ scope.row.stage }}</td>
          <td class="is-center">{{ scope.row.datetime }}</td>
          <td class="is-center">{{ scope.row.name }}</td>
          <td class="is-center">{{ scope.row.address }}</td>
          <td class="is-center">{{ scope.row.counts }}</td>
        </template>
      </mu-data-table>
    </mu-paper>
    </div>
    <!-- table end -->
  </div>
</template>
<script>
import { ABI } from "@/libs/abi.js";
import { $get } from '@/libs/api';
import { ADDRESS, API_VOTE_RECORDS, API_RECORDS_DATA } from "@/libs/constant.js";
import { ADDR_NAME } from "@/libs/addr_name.js";
import { timetrans } from "@/components/mixin/formatDate.js";
export default {
    name: "Record",
    mixins: [timetrans],
    data() {
        return {
            stages: [1],
            rounds: null,
            block: null,
            web3Hpb: null,
            hpbTestContract: null,
            custom: {
                value1: this.$t("Rnode.stage", { msg: 1 }), // 默认从第一期 第一轮开始
                value2: this.$t("Rnode.round", { msg: 1 })
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
                    title: this.$t("Rnode.table.address"),
                    name: "address",
                    align: "center"
                },
                {
                    title: this.$t("Rnode.table.counts"),
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
      address: 投票人地址，
      counts: 票数
    },{...}....]
    */  
        // this.changeData();
        this.getTermsRounds();
        this.initRecord();
    },
    methods: {
        changeLangage() {
            for (let i = 0; i < 5; i++) {
                this.columns[i].title = this.$t(
                    "Rnode.table." + this.columns[i].name
                );
            }
            if (typeof this.custom.value2 === "string") {
                this.custom.value2 = this.$t("Rnode.round", { msg: 1 });
            };
            const regex = /\d+/
            let term = String(this.custom.value1).match(regex)[0]
            this.custom.value1 = this.$t("Rnode.stage", { msg: term });
        },
        toDetail(index, row, event) {
            const regex = /\d+/
            let term = String(this.custom.value1).match(regex)[0]
            let round = this.list[0].stage
            this.$router.push({
                path: "/detail",
                query: {
                    name: row["name"],
                    addr: row["address"],
                    current_period: term,
                    current_round: Number(round),
                    all_rounds: this.rounds
                }
            });
        },
        changePeriod(term) {
            this.getTermsRounds(term);
            this.initRecord(term);
            this.custom.value2 = this.$t("Rnode.round", { msg: 1 });
        },
        changeData(round = 0) {
            const regex = /\d+/
            let term = String(this.custom.value1).match(regex)[0]
            if(this.rounds == round+1){ // 最后一轮时
                this.initWeb3(Number(term));
                this.getWeb3Data(Number(term), round);
            } else { // 从数据库查数据
                this.getTermsRounds(term);
                this.initRecord(term, round+1);
            }
        },
        handleSortChange({ name, order }) {
            this.list = this.list.sort(
                (a, b) =>
                    order === "asc" ? a[name] - b[name] : b[name] - a[name]
            );
        },
        getWeb3Data(term, round) {
            var data = null;
            var counts = null;
            term = term - 1;
            this.list = [];
            this.block = this.hpbTestContract.fechSnapshotBlockByIndex(round);
            var addr_nums = this.hpbTestContract.fechAllVoteResultBySnapshotBlock(
                this.block
            );
            var timestamp = this.web3Hpb.hpb.getBlock(this.block).timestamp;
            for (let i = 0; i < addr_nums[0].length; i++) {
                counts = addr_nums[1][i].toNumber() / 1e18;
                data = {
                    datetime: this.timetrans(timestamp),
                    stage: round + 1,
                    name: ADDR_NAME[term][addr_nums[0][i]],
                    address: addr_nums[0][i],
                    counts: counts.toFixed(0)
                };
                this.list.push(data);
            }
            this.list = this.list.sort((a, b) => b["counts"] - a["counts"]);
        },
        getTermsRounds(term = 1) {
            let params = {"term": term}
            $get(API_VOTE_RECORDS, params).then(resp =>{
                this.stages = resp.data.term_count;
                this.rounds = resp.data.rounds;
            })
        },
        initRecord(term = 1, round = 1) {
            let params = {"term": term, "round": round}
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
<style lang="stylus" >
.record
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
    text-align center
    color #fff
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
//   .mu-item-title
//     text-align center!important
  .mu-paper
    background-color transparent
    .mu-table
      background-color transparent
    tbody tr
      background-color RGBA(92, 112, 237, 0.18)
      &:hover
        background-color RGBA(14, 51, 133, 1)
    .mu-table td
      font-size 11pt!important
    .mu-table tr, .mu-table th, .mu-table th.is-sortable
      color #FFF
      background-color RGBA(92, 112, 237, 0.18)
  </style>
