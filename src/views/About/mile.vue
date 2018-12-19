<template>
  <div class="mile">
    <mu-stepper class='timeline' orientation="vertical" :linear="false">
      <mu-step active v-for='(pro,index) in progress' :key='index'>
        <mu-step-label>
          <mu-icon value="panorama_fish_eye" color="primary" slot="icon"></mu-icon>
          <span class="version-title">{{pro.date}}</span>
        </mu-step-label>
        <mu-step-content>
          {{pro.msg}}
        </mu-step-content>
      </mu-step>
    </mu-stepper>
  </div>
</template>
<script>
export default {
  name: 'Mile',
  data () {
    return {
      progress: [
        {
          date: '2018年 6月 20日',
          msg: '国际化完成，英文版发布'
        },
        {
          date: '2018年 6月 14日',
          msg: '拥有生成导出mp4视频能力'
        },
        {
          date: '2018年 6月 1日',
          msg: '新增完全离线使用能力'
        },
        {
          date: '2018年 5月 22日',
          msg: '手绘微课Pro发布, 全新界面，全新交互，聚焦手写笔迹录制功能'
        }
      ]
    }
  },
  components: {

  }
}
</script>
<style lang="stylus" scoped>
@import '../mixin'

.mile
  padding 30px
  background-color white
  color $dark
</style>
