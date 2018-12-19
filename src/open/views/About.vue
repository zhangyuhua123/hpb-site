<template>
  <div class="about">
    <Layout>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Select  @on-change="fetchFilesList(moduleId)" v-model="moduleId" style="width:200px;margin-top:4%" :placeholder='placeholder'>
              <Option v-for="(item, i) in documentsList" :value="item.id" :key="i">{{ item.name }}</Option>
            </Select>
            <div @click="getFileDetail(item.id)" class="show file-title" v-for="(item, i) in filesList" :key="i" :class="{'active':item.id ==checkindex }">{{item.title}}
            </div>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>{{ $t('open.module.file') }}</BreadcrumbItem>
            <BreadcrumbItem>{{ currentModule }}</BreadcrumbItem>
            <BreadcrumbItem>{{ currentFile }}</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <h1 class="title_content">{{ currentFile }}</h1>
            <div class="updatatime">{{$t('open.module.update_at') }}：<span>{{ updateTime }}</span></div>
            <p v-html="fileContent"></p>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<style>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.ivu-breadcrumb {
    color: RGBA(0, 119, 255, 1);
}
.about
    .ivu-menu-light.ivu-menu-vertical
    .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: RGBA(0, 119, 255, 1);
}
.mu-button-wrapper {
   padding: 0 10px!important
}
.about .ivu-menu-submenu-title:hover {
    background: RGBA(0, 119, 255, 1);
    color: #fff;
}
.about .show:hover{
  color:RGBA(0, 119, 255, 1)
}
.updatatime{
    color:#999999;
    font-size:14px;
    text-align: right;
    margin-bottom: 10px
}
.title_content{
    font-size: 28px;
    color:#333;
    font-weight: 400;
}
.file-title {
    padding:2% 0;
    border-bottom: 1px #E6EAEE solid;
    line-height: 2.8;
    text-indent: 15px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    position: relative;
    cursor: pointer;
}
.active{
    color:RGBA(0, 119, 255, 1);
    background:#f3f8fd;
}
.inputcheckbox{
    position: absolute;
    top:35%;
    right: 10px;

}
</style>
<script>
import { $get } from "@/libs/api";
import { API_DOCUMENT_LIST, API_FILES_LIST, API_FILE_DETAIL } from "@/libs/constant.js";
import { upAt } from '@/components/mixin/formatDate'

export default {
    name: 'ablout',
    mixins: [upAt],
    data() {
        return {
            moduleId: "",
            documentsList: [],
            filesList: [],
            firstFileId: 0,
            fileContent: null,
            currentModule: '',
            currentFile: null,
            currentFileId: 0,
            updateTime: null,
            file: null,
            checkbox:'',
            checkindex: 0 ,
            placeholder:''
        };
    },
    computed: {
      language () {
        const lang = this.$store.getters.preferences.lang
        return lang === 'zh' ? 'cn' : 'en'
      }
    },
    watch: {
      language: function () {
        this.fetchFilesList(this.currentFileId)
        this.fetchDocumentList()
      }
    },
    mounted: function () {
        this.fetchFilesList(this.$route.query.id)
        this.fetchDocumentList()
    },
    methods: {
        fetchDocumentList () {
            const language = this.$store.getters.preferences.lang
            // console.log(this.$store.getters.preferences.lang)
            let params = { language }
            $get(API_DOCUMENT_LIST, params).then(resp => {
                this.documentsList = resp.data
                this.documentsList.sort((a, b) => b['position'] - a['position'])
            })
        },
        fetchFilesList (id) {
            let params = this.getParams(id)
            this.currentFileId = id
            $get(API_FILES_LIST, params).then(resp => {
                this.filesList = resp.data
                this.filesList.sort((a, b) => a['position'] - b['position'])
                if (this.filesList.length != 0) {
                    this.firstFileId = this.filesList[0].id
                    this.getFileDetail(this.firstFileId)
                } else {
                     this.filesList = [{title: '该模块下没有文章'}]
                }
            })
        },
        getFileDetail (id) {
            let params = this.getParams(id)
            $get(API_FILE_DETAIL, params).then(resp => {
                this.file = resp.data
                this.currentFile = resp.data.title
                this.currentModule = resp.data.belong
                this.updateTime = resp.data.updated_at
                this.fileContent = resp.data.content
                this.updateTime = this.upAt(resp.data.updated_at)
                this.placeholder = this.currentModule
            })
            this.checkindex = id

        },
        getParams (id) {
            const language = this.$store.getters.preferences.lang
            let params = {
                id: id,
                language
            }
            return params
        },
        checkboxOnclick(id){
           console.log(id);
        }
    },
};
</script>


