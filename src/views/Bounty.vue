<template>
  <div class="bounty">
    <mu-row gutter>
      <mu-col
        class="vg-col"
        span='12'
        lg="12"
      >
        <div class="bounty_banner">
          <h2>{{$t('Bounty.title')}}</h2>
          <p>{{$t('Bounty.titleintroduce')}}</p>
        </div>
      </mu-col>
    </mu-row>
    <mu-container
      class="dapps"
      fluid
      :class="{bountyapp:isbountyapp}"
    >
      <!-- 申请 -->
      <h3>{{$t('Bounty.pending_project')}}</h3>
      <mu-row gutter>
        <mu-col
          class="vg-col"
          span='12'
          lg="3"
          v-for="(item, i) in bountyPending.list"
          :key="i"
        >
          <ul class="bountycard">
            <li class="bountyitem">
              <div
                style="color:RGBA(102, 102, 102, 1)"
                class="bountytitle"
              >{{item.title}}</div>
              <div style="color:RGBA(228, 51, 135, 1);"><img src="/img/boundty/reward.png"><span>{{item.bounty}}&nbsp;HPB</span></div>
              <div style="color:RGBA(102, 102, 102, 1);text-align:left"><span
                  style="margin-left:2%;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:5;overflow: hidden;"
                  v-html="item.summary"
                  class="bountydescription"
                  ref='des'
                ></span></div>
              <mu-card-actions :class="{bountyaction:isbountyaction}">
                <mu-button @click="openSimpleDialog(item)">{{$t('Bounty.apply')}}</mu-button>
              </mu-card-actions>
            </li>
          </ul>
        </mu-col>
      </mu-row>
      <mu-row>
        <mu-col
          span="12"
          :class="{segmentation:issegmentation}"
          v-if="bountyPending.list.length<bountyPending.pagination.totalCount"
        >
          <div>
            <div
              style="height:1px;width:33%;float:left"
              class="line"
            ></div>
            <div
              class="grid-cell pagination"
              @click='morelist(bountyPending,"pending")'
            >{{$t('Bounty.more')}}</div>
            <div
              style="height:1px;width:33%;float:right"
              class="line"
            ></div>
          </div>
        </mu-col>
      </mu-row>
      <!-- 开发中 -->
      <h3
        v-if="bountyDeveloping.list.length > 0"
        style="background: url('/img/boundty/waiting.png') no-repeat;background-size:contain"
      >{{$t('Bounty.developing_project')}}</h3>
      <mu-row gutter>
        <mu-col
          class="vg-col"
          span='12'
          lg="3"
          v-for="(item, i) in bountyDeveloping.list"
          :key="i"
        >
          <ul class="bountycard">
            <li class="bountyitem">
              <div style="color:RGBA(102, 102, 102, 1)">{{item.title}}</div>
              <div style="color:RGBA(228, 51, 135, 1)"><img src="/img/boundty/reward.png"><span>{{item.bounty}}&nbsp;HPB</span></div>
              <div style="color:RGBA(102, 102, 102, 1);text-align:left"><span
                  style="margin-left:2%;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:5;overflow: hidden;"
                  v-html="item.summary"
                  class="bountydescription"
                  ref="bountydescription"
                ></span></div>
              <mu-card-actions :class="{bountyaction:isbountyaction}">
                <mu-button
                  :disabled="item.addr=='' ? true :false"
                  @click='openNewWindow(item.addr)'
                >{{$t('Bounty.developing')}}</mu-button>
              </mu-card-actions>
            </li>
          </ul>
        </mu-col>
      </mu-row>
      <mu-row>
        <mu-col
          span="12"
          :class="{segmentation:issegmentation}"
          v-if="bountyDeveloping.list.length<bountyDeveloping.pagination.totalCount"
        >
          <div>
            <div
              style="height:1px;width:33%;float:left"
              class="line"
            ></div>
            <div
              class="grid-cell pagination"
              @click='morelist(bountyDeveloping, "developing")'
            >{{$t('Bounty.more')}}</div>
            <div
              style="height:1px;width:33%;float:right"
              class="line"
            ></div>
          </div>
        </mu-col>
      </mu-row>
      <h3
        v-if="bountyFinished.list > 0"
        style="background: url('/img/boundty/doing.png') no-repeat;background-size:contain"
      >{{$t('Bounty.finished_project')}}</h3>
      <mu-row gutter>
        <mu-col
          class="vg-col"
          span='12'
          lg="3"
          v-for="(item, i) in bountyFinished.list"
          :key="i"
        >
          <ul class="bountycard">
            <li class="bountyitem">
              <div style="color:RGBA(102, 102, 102, 1)">{{item.title}}</div>
              <div style="color:RGBA(228, 51, 135, 1)"><img src="/img/boundty/reward.png"><span>{{item.bounty}}&nbsp;HPB</span></div>
              <div style="color:RGBA(102, 102, 102, 1);text-align:left"><span
                  style="margin-left:2%;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:5;overflow: hidden;"
                  v-html="item.summary"
                  class="bountydescription"
                ></span></div>
              <mu-card-actions :class="{bountyaction:isbountyaction}">
                <mu-button
                  :disabled="item.addr===''? true:false"
                  @click='openNewWindow(item.addr)'
                >{{$t('Bounty.finished')}}</mu-button>
              </mu-card-actions>
            </li>
          </ul>
        </mu-col>
      </mu-row>
      <mu-row>
        <mu-col
          span="12"
          :class="{segmentation:issegmentation}"
          v-if="bountyFinished.list.length<bountyFinished.pagination.totalCount"
        >
          <div>
            <div
              style="height:1px;width:33%;float:left"
              class="line"
            ></div>
            <div
              class="grid-cell pagination"
              @click='morelist(bountyFinished,"finished")'
            >{{$t('Bounty.more')}}</div>
            <div
              style="height:1px;width:33%;float:right"
              class="line"
            ></div>
          </div>
        </mu-col>
      </mu-row>
      <mu-dialog
        :title="projectApplication.title"
        width="800"
        :open.sync="openSimple"
        v-if="isbigdialog"
      >
        <div class="reward_p"><span style="color:RGBA(228, 51, 135, 1);float:left;margin-right:8%">{{$t('Bounty.total_bounty')}}:<i>{{projectApplication.bounty}}&nbsp;HPB</i></span><span style="color:#000;float:left">{{$t('Bounty.Dialog.task_id')}}:<i>{{projectApplication.code}}</i></span></div>
        <mu-text-field
          v-html="projectApplication.description"
          multi-line
          :rows="3"
          :rows-max="8"
          :class="{bountytextarea:istextare}"
        ></mu-text-field><br />
        <mu-form
          ref="form"
          :model="projectApplication"
          class="mu-demo-form"
        >
          <mu-form-item
            :label="$t('Bounty.Dialog.email')"
            prop="email"
            :rules="emailRules"
          >
            <strong>*</strong>
            <mu-text-field
              v-model="projectApplication.email"
              prop="email"
              :style="{background:'#eee'}"
            ></mu-text-field>
          </mu-form-item>
          <mu-form-item
            :label="$t('Bounty.Dialog.name')"
            prop="name"
            :rules="nameRules"
          >
            <strong>*</strong>
            <mu-text-field
              v-model="projectApplication.name"
              prop="name"
              :style="{background:'#eee'}"
            ></mu-text-field>
          </mu-form-item>
          <mu-form-item :label="$t('Bounty.Dialog.portfolio_link')">
            <mu-text-field
              v-model="projectApplication.product_url"
              :style="{background:'#eee'}"
            ></mu-text-field>
          </mu-form-item>
          <mu-form-item
            :label="$t('Bounty.Dialog.plan')"
            prop="time_plan"
            :rules="timePlanRules"
          >
            <strong>*</strong>
            <mu-text-field
              v-model="projectApplication.time_plan"
              multi-line
              :rows="3"
              :style="{background:'#eee'}"
            ></mu-text-field>
          </mu-form-item>
          <mu-form-item
            :label="$t('Bounty.Dialog.team_introduction')"
            prop="team_introduction"
            :rules="teamIntroductionRules"
          >
            <strong>*</strong>
            <mu-text-field
              v-model="projectApplication.team_introduction"
              prop="team_introduction"
              multi-line
              :rows="3"
              :style="{background:'#eee'}"
            ></mu-text-field>
          </mu-form-item>
          <mu-form-item
            :label="$t('Bounty.Dialog.implementation_scheme')"
            prop="achieve_scheme"
            :rules="achieveSchemeRules"
          >
            <strong>*</strong>
            <mu-text-field
              v-model="projectApplication.achieve_scheme"
              prop="achieve_scheme"
              multi-line
              :rows="3"
              :style="{background:'#eee'}"
            ></mu-text-field>
          </mu-form-item>
          <mu-form-item
            :label="$t('Bounty.Dialog.completion_time')"
            prop="completion_time"
            :rules="completionTimeRules"
          >
            <strong>*</strong>
            <mu-text-field
              v-model="projectApplication.completion_time"
              prop="completion_time"
              :style="{background:'#eee'}"
            ></mu-text-field>
          </mu-form-item>
          <mu-form-item
            prop="input"
            :label="$t('Bounty.Dialog.address')"
          >
            <mu-text-field
              v-model="projectApplication.result_addr"
              :style="{background:'#eee'}"
            ></mu-text-field>
          </mu-form-item>
          <input
            v-model="projectApplication.project_id"
            type="hidden"
          />
          <mu-form-item>
            <mu-card-actions :class="{dialogaction:isdialog}">
              <mu-button
                class="demo-button"
                style="background:RGB(92,98,158);color:#fff"
                @click="openeDialog"
              >{{$t('Bounty.apply')}}</mu-button>
              <mu-button
                class="demo-button"
                style="background:RGB(92,98,158);color:#fff"
                @click="closeSimpleDialog"
              >{{$t('Bounty.Dialog.back')}}</mu-button>
            </mu-card-actions>
          </mu-form-item>
        </mu-form>
      </mu-dialog>
    </mu-container>
    <!-- 请求的接口时候的弹框 -->
    <mu-dialog
      title=""
      width="360"
      :open.sync="openSimple"
      v-if="isopen"
      dialog-class="dialog-show"
    >
      <i
        class="iconfont icon-cuowu"
        v-if='errregister'
        style='color:red'
      ></i>
      <i
        class="iconfont icon-icon--yes"
        style='color:green'
        v-else
      ></i>
      <span class="tokeninformation">{{projectApplication.resultMessage}}</span>
      <mu-button
        slot="actions"
        flat
        color="primary"
        @click="closeSimpleDialog"
      >{{$t('Bounty.Dialog.ok')}}</mu-button>
    </mu-dialog>
  </div>
</template>
<script>
// import Toast from 'muse-ui-toast'
import { API_PROJECTS_LIST } from "@/libs/constant";
import {
  API_PROJECT_APPLICATIONS_CREATE,
  RESP_USED_EMAIL_CODE,
  RESP_OK_CODE
} from "@/libs/constant";
import { $get } from "@/libs/api";
import { $postBase } from "@/libs/api";
export default {
  name: "Bounty",
  metaInfo() {
    return {
      title: this.$t("title") + "|" + this.$t("navs.client")
    };
  },
  data() {
    return {
      isbountyapp: true,
      openSimple: false,
      disable: "",
      isopen: false,
      isbountyaction: true,
      isbountyinput: true,
      isbountyinput: true,
      istextare: true,
      isdialog: true,
      isbigdialog: true,
      issegmentation: true,
      errregister: false,
      isdisabled: true,
      activeColor: "gray",
      projectApplication: {
        project_id: "",
        title: "",
        bounty: "",
        code: "",
        description: "",
        email: "",
        name: "",
        product_url: "",
        time_plan: "",
        team_introduction: "",
        achieve_scheme: "",
        completion_time: "",
        result_addr: "",
        resultMessage: ""
      },
      emailRules: [
        {
          validate: val => !!val,
          message: this.$t("Bounty.RequiredMessage.required_email")
        }
      ],
      nameRules: [
        {
          validate: val => !!val,
          message: this.$t("Bounty.RequiredMessage.required_name")
        }
      ],
      timePlanRules: [
        {
          validate: val => !!val,
          message: this.$t("Bounty.RequiredMessage.required_task_plan")
        }
      ],
      teamIntroductionRules: [
        {
          validate: val => !!val,
          message: this.$t("Bounty.RequiredMessage.required_team_members")
        }
      ],
      achieveSchemeRules: [
        {
          validate: val => !!val,
          message: this.$t("Bounty.RequiredMessage.required_development_plan")
        }
      ],
      completionTimeRules: [
        {
          validate: val => !!val,
          message: this.$t("Bounty.RequiredMessage.required_completion_time")
        }
      ],
      bountyPending: {
        list: [],
        pagination: {
          currentPage: 1,
          totalCount: 0,
          pageSize: 4
        }
      },
      bountyDeveloping: {
        list: [],
        pagination: {
          currentPage: 1,
          totalCount: 0,
          pageSize: 4
        }
      },
      bountyFinished: {
        list: [],
        pagination: {
          currentPage: 1,
          totalCount: 0,
          pageSize: 4
        }
      },
      visibility: false,
      list: []
    };
  },
  components: {},
  computed: {
    pendingList() {
      return this.bountyPending.list.map(item => {
        return item;
      });
    },
    language() {
      const lang = this.$store.getters.preferences.lang;
      return lang === "zh" ? "cn" : "en";
    }
  },
  mounted: function() {
    this.fetchProjectsList("pending", this.bountyPending);
    this.fetchProjectsList("developing", this.bountyDeveloping);
    this.fetchProjectsList("finished", this.bountyFinished);
  },
  watch: {
    language: function(newV) {
      this.fetchProjectsList("pending", this.bountyPending);
      this.fetchProjectsList("developing", this.bountyDeveloping);
      this.fetchProjectsList("finished", this.bountyFinished);
    }
  },
  methods: {
    openSimpleDialog(item) {
      this.openSimple = true;
      this.isopen = false;
      this.isbigdialog = true;
      this.setApplyInputBlank();
      this.projectApplication.project_id = item.id;
      this.projectApplication.title = item.title;
      this.projectApplication.description = item.description;
      this.projectApplication.code = item.code;
      this.projectApplication.bounty = item.bounty;
    },
    closeSimpleDialog() {
      this.openSimple = false;
    },
    openNewWindow(url) {
      window.open(url, "_blank");
    },
    openeDialog() {
      var apply_params = this.getApplyParams();
      this.$refs.form.validate().then(result => {
        if (result) {
          this.isopen = true;
          this.isbigdialog = false;
          this.createApplyRecord(apply_params);
        }
      });
    },
    // 获取input 输入框中的数据信息构造参数
    getApplyParams() {
      var apply_params = {
        project_id: this.projectApplication.project_id,
        email: this.projectApplication.email,
        name: this.projectApplication.name,
        time_plan: this.projectApplication.time_plan,
        product_url: this.projectApplication.product_url,
        team_introduction: this.projectApplication.team_introduction,
        achieve_scheme: this.projectApplication.achieve_scheme,
        completion_time: this.projectApplication.completion_time,
        result_addr: this.projectApplication.result_addr,
        language: this.language
      };
      return apply_params;
    },
    fetchProjectsList(status, bountyData) {
      let params = {
        page: bountyData.pagination.currentPage,
        per_page: bountyData.pagination.pageSize,
        status: status,
        language: this.language
      };
      $get(API_PROJECTS_LIST, params).then(resp => {
        // bountyData.list = bountyData.list.concat(resp.data);
        bountyData.list = resp.data;
        bountyData.list.forEach(item => {
          // console.log('bbbbbbbbb',Number(item.bounty).toFixed(0))
          item.bounty = Number(item.bounty).toFixed(0);
          // item.summary = item.summary.substr(0,300)+'...'
          item.title = item.title.substr(0, 30);
        });
        const pagination = resp.pagination;
        if (pagination) {
          bountyData.pagination.pageSize = resp.pagination.per_page;
          bountyData.pagination.totalCount = resp.pagination.total_count;
        } else {
          bountyData.pagination.totalCount = bountyData.list.length;
        }
      });
    },
    morelist(bountyData, status) {
      bountyData.pagination.pageSize += 4;
      this.fetchProjectsList(status, bountyData);
    },
    setApplyInputBlank() {
      (this.projectApplication.email = ""),
        (this.projectApplication.name = ""),
        (this.projectApplication.product_url = ""),
        (this.projectApplication.time_plan = ""),
        (this.projectApplication.team_introduction = ""),
        (this.projectApplication.achieve_scheme = ""),
        (this.projectApplication.completion_time = ""),
        (this.projectApplication.result_addr = "");
    },
    createApplyRecord(params) {
      this.setApplyInputBlank();
      // console.log('請求前')
      $postBase(API_PROJECT_APPLICATIONS_CREATE, params).then(resp => {
        if (resp.status === "0000") {
          this.projectApplication.resultMessage = this.$t(
            "Bounty.Result.succrssInfo"
          );
          this.errregister = false;
        } else if (resp.status === "0001") {
          this.projectApplication.resultMessage = this.$t(
            "Bounty.Result.errorInfo"
          );
          this.errregister = true;
        } else if (resp.status === "5000") {
          this.projectApplication.resultMessage = "delays";
          this.errregister = true;
        }
      });
    }
  }
};
</script>
<style lang="stylus">
@import './mixin';
@import '../assets/css/bounty.less'
</style>
