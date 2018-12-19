<template>
  <div class="home">
    <section class="s1" id="home">
      <div class="container">
        <h1>{{$t('home.s1.h1')}}</h1>
        <h2 v-html="$t('home.s1.h2')"></h2>
        <div class="btn-group">
          <a
            v-for="(btn, i) in $t('home.s1.btns')"
            :key="i"
            :href='btn.url'
            class="btn"
            target='blank'>{{btn.title}}</a>
          <router-link to="/faq" class="btn">{{$t('navs.faq')}}</router-link>
        </div>
        <div class="social-group">
          <a
            class="social-item"
            v-for="(item, i) in socialList"
            :href='item.url'
            target="blank"
            :key='i'>
            <mu-tooltip :content="item.name">
              <i :class="'iconfont icon-' + item.name.toLowerCase()"></i>
            </mu-tooltip>
          </a>
        </div>
      </div>
    </section>
    <section class="s2" id="solution">
      <div class="container">
        <h1>{{$t('home.s2.h1')}}</h1>
        <div class="desc">
          <p
            v-for="(item,i) in $t('home.s2.desc')"
            :key='i'
          >{{item}}</p>
        </div>
        <div class="card-group">
          <div class="card" v-for="(num, i) in [1, 2, 3]" :key="i">
            <img :class="'img-' + i" :src="'/img/sec2_' + num + '.png'" alt="">
            <h2 v-html="$t('home.s2.cards')[i].title.join('<br>')"></h2>
            <div class="line"></div>
            <div class="content" v-html="$t('home.s2.cards')[i].content.join('<br>')"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="s3">
      <div class="container">
        <h1>{{$t('home.s3.h1')}}</h1>
        <div class="para-group">
          <div class="para" v-for="num in [1]" :key="num">
            <div class="imgs round num-1">
              <img :src="'/img/sec3_' + num + '.png'" alt="">
            </div>
            <div class="content">
              <h3>{{$t('home.s3.para' + num + '.title')}}</h3>
              <p>{{$t('home.s3.para' + num + '.content')}}</p>
            </div>
          </div>
          <div class="para">
            <div class="imgs">
              <div class="langs">
                <img
                  v-for='(item, i) in [1, 2, 3, 4, 5]'
                  :key='i'
                  :src="'/img/lang/' + item + '.png'"
                  alt="">
              </div>
            </div>
            <div class="content">
              <h3>{{$t('home.s3.para4.title')}}</h3>
              <p>{{$t('home.s3.para4.content')}}</p>
            </div>
          </div>
          <div class="para" v-for="num in [2, 3]" :key="num">
            <div class="imgs round">
              <img :src="'/img/sec3_' + num + '.png'" alt="">
            </div>
            <div class="content">
              <h3>{{$t('home.s3.para' + num + '.title')}}</h3>
              <p>{{$t('home.s3.para' + num + '.content')}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="s4" id="roadmap">
      <div class="container">
        <h1>{{$t('home.s4.h1')}}</h1>
        <div class="routes">
          <img :src="'/img/' + $t('home.s4.routeImg') + '.png'" alt="">
        </div>
      </div>
    </section>
    <section class="s5" id="team">
      <div class="container">
        <h1>{{$t('home.s5.h1')}}</h1>
        <div class="desc">{{$t('home.s5.desc')}}</div>
        <h2>{{$t('home.s5.founderT')}}</h2>
        <div class="member-container">
          <a
            class="member"
            v-for="(item,i) in [1, 2, 3, 4]"
            href="#"
            @click.prevent="showMemberInfo('founder', i)"
            :key="item">
            <div class="avatar">
              <img :src="'/img/member/founder_' + item + '.jpg'" alt="">
            </div>
            <div class="m-name">{{$t('home.s5.founder')[i].name}}</div>
            <div class="m-title">{{$t('home.s5.founder')[i].title}}</div>
          </a>
        </div>
        <h2>{{$t('home.s5.OverseasT')}}</h2>
        <div class="member-container">
          <a
            class="member"
            href="#"
            v-for="(item,i) in [5, 6, 7]"
            @click.prevent="showMemberInfo('member1', i)"
            :key="item">
            <div class="avatar">
              <img :src="'/img/member/member1_' + (i + 1) + '.jpg'" alt="">
            </div>
            <div class="m-name">{{$t('home.s5.member1')[i].name}}</div>
            <div class="m-title">{{$t('home.s5.member1')[i].title}}</div>
          </a>
        </div>
        <h2>{{$t('home.s5.DomesticT')}}</h2>
        <div class="member-container">
          <a
            class="member"
            href="#"
            v-for="(item,i) in [8, 9, 10]"
            @click.prevent="showMemberInfo('member2', i)"
            :key="item">
            <div class="avatar">
              <img :src="'/img/member/member2_' + (i + 1) + '.jpg'" alt="">
            </div>
            <div class="m-name">{{$t('home.s5.member2')[i].name}}</div>
            <div class="m-title">{{$t('home.s5.member2')[i].title}}</div>
          </a>
        </div>
      </div>
    </section>
    <section class="s6" id="partnerships">
      <div class="container">
        <h1>{{$t('home.s6.h1')}}</h1>
        <div class="member-container">
          <div
            class="member"
            v-for="(item,i) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
            :key="item">
            <img :src="'/img/advisor/person_' + item + '.png'" alt="">
            <div class="m-name">{{$t('home.s6.counselors')[i].name}}</div>
            <div class="m-title" v-html="$t('home.s6.counselors')[i].title.join('<br>')"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="s7" id="contact">
      <div class="container">
        <h1>{{$t('home.s7.h1')}}</h1>
        <div class="desc">{{$t('home.s7.desc')}}</div>
        <ContactForm />
        <!-- <h2>{{$t('home.s7.h2')}}</h2>
        <MailSubscribeForm /> -->
      </div>
    </section>
    <mu-dialog width="420" :open.sync="openUserCard" transition='scale' :scrollable="scrollable" :lock-scroll="lockscroll">
      <div class="user-info-card">
        <div class="left" >
          <div class="avatar" >
            <img :src="currentUser.avatar" alt="">
          </div>
          <div class="m-name">{{currentUser.name}}</div>
          <div class="m-title" >{{currentUser.title}}</div>
        </div>
        <div class="desc"  style="-webkit-overflow-scrolling:touch;overflow-y:scroll;width:100%;height:100%">
          {{currentUser.desc}}
        </div>
      </div>
      <mu-button
        slot="actions"
        flat
        color="primary"
        @click="closeUserCardDialog">{{$t('common.close')}}</mu-button>
    </mu-dialog>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
import MailSubscribeForm from '@/components/MailSubscribeForm'
import { SOCIAL_LIST } from '@/libs/constant'
require('particles.js')

export default {
  name: 'home',
  metaInfo () {
    return {
      title: this.$t('title')
    }
  },
  data () {
    return {
      openUserCard: false,
      scrollable:true,
      lockscroll:false,
      currentUser: {},
      socialList: SOCIAL_LIST,
      linkedins: [
        'https://www.linkedin.com/in/xiaoming-wang-90ab1b160/',
        'https://www.linkedin.com/in/jinxin-li-293b13160/',
        'https://www.linkedin.com/in/li-xu-a63760160/',
        'https://www.linkedin.com/in/shanlin-lou-46a75a124/'
      ]
    }
  },
  components: {
    ContactForm,
    MailSubscribeForm
  },
  mounted () {
    window.particlesJS.load('home', '/json/particles.json');
  },
  methods: {
    showMemberInfo (ty, i) {
      this.currentUser = {
        avatar: `/img/member/${ty}_${(i + 1)}.jpg`,
        ...this.$t(`home.s5.${ty}`)[i]
      }
      this.openUserCard = true
    },
    closeUserCardDialog () {
      this.openUserCard = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import './mixin'
.shine
  text-shadow 0 0 0.83333vw $light, 0 0 0.83333vw $light
.line
  width 100%
  height 3vw
  background url('~@/assets/img/line.png') no-repeat center
.member-container
  display flex
  flex-wrap wrap
  margin-top 3vw
  .member
    margin 2vw 0
    text-align center
    img
      border 4px solid #f5f5f5
      width 12vw
    .m-name
      font-size 18px
      margin 0.8vw
      font-weight bold
    .m-title
      font-size 16px
      font-style italic
      font-family Titillium Web
    @media screen and (max-width 769px)
      img
        width 22vw
.home
  font-family Nunito
  color white
  padding-top 12vw
  margin-top -12vw
  background url(/img/bg.png)
  @media screen and (max-width 1000px)
    padding-top 10vw
  section
    padding 4vw 1vw
    min-height 56vw
    .container
      width 80vw
      margin 0 auto
      position relative
      z-index 99
      @media screen and (max-width 769px)
        width 90vw
    &.s1
      overflow hidden
      position relative
      min-height 48vw
      h2
        margin 4vw 0
        color #E0E0E0
        font-size 2vw
    &.s2, &.s4, &.s6
      background $ldark
    &.s3, &.s7
      background $white
      color $dark
  h1
    font-size 3vw
    margin 1vw 0 3vw 0
  .desc
    font-size 16px
    font-family Dosis
  .btn-group
    display flex
    margin-top 6vw
    .btn
      padding 1vw 1.2vw
      background-color rgba(19, 25, 44, 1)
      color white
      font-weight 700
      font-size 1.4vw
      cursor pointer
      min-width 17vw
      text-align center
      border 2px solid rgba(19, 25, 44, 1)
      transition border-color 0.4s ease 0s, background-color 0.4s ease 0s
      &:hover
        border-color #E0E0E0
        background-color transparent
      & + .btn
        margin-left 1vw
      @media screen and (max-width 1000px)
        flex 1
        text-align center
        font-size 1.6vw
  @media screen and (max-width 769px)
    text-align center
    h1
      font-size 6vw
    section.s1
      h2
        font-size 4.2vw
    .btn-group
      display block
      .btn
        font-size 3.4vw
        display block
        margin 15px 0
        & + .btn
          margin-left 0
  .social-group
    display flex
    margin-top 6vw
    margin-left 0px
    @media screen and (min-width 1000px)
      margin-left 27px
    .social-item
      text-align center
      width 8vw
      color $white
      i
        font-size 3.4vw
      &:hover
        color white
      @media screen and (max-width 1000px)
        flex 1
      @media screen and (max-width 769px)
        i
          font-size 6vw

  .s2
    font-family Titillium Web
    h1
      text-align center
    .desc p
      margin-bottom 20px
      font-size 18px
    .card-group
      text-align center
      margin-top 5vw
      display flex
      .card
        flex 1
        h2
          margin 2vw 0 0 0
          font-size 20px
        .content
          font-size 16px
        img
          height 12vw
        .img-2
          height 8vw
          margin 2vw 0
        & + .card
          margin-left 2vw
      @media screen and (max-width 769px)
        display block
        .card
          display block
          margin 3vw 0
          img
            height 30vw
            margin 15px 0
          .img-2
            height 20vw
          & + .card
            margin-left 0
  .s3
    h1
      text-align center
    .para
      margin-top 4vw
      display flex
      .imgs
        flex 1
        text-align center
        line-height 13vw
        img
          max-height 120px
          vertical-align middle
        .langs
          line-height 1.2
          width 300px
          margin 0 auto
          img
            width 60px
            margin 10px 15px
      .num-1 img
        max-height 100px
      .content
        flex 1
        font-size 16px
        h3
          font-size 18px
          margin 10px 0
      @media screen and (max-width 769px)
        display block
        height auto
        margin 5vw 0
        .imgs,.content
          display block
          margin 2vw 0
          img
            max-width 30vw

  .s4
    font-family Titillium Web
    text-align center
    .routes
      width 100%
      margin 40px 0
      img
        width 100%
    @media screen and (max-width 769px)
      padding 4vw 0
      .container
        padding 0
        width 100vw
        max-width 100%
  .s5
    text-align center
    h2
      margin-top 3vw
      font-size 20px
    .member-container
      .member
        flex 25%
        color white
        .avatar
          position relative
          img
            transition transform 0.3s ease
            &:hover
              transform scale(1.1)
        @media screen and (max-width 769px)
          flex 50%
          margin-bottom 20px
          padding 0 10px
  .s6
    text-align center
    .member-container
      .member
        flex 20%
        .m-name
          font-size 16px
        .m-title
          font-size 14px
        @media screen and (max-width 769px)
          flex 50%
          margin-bottom 20px
  .s7
    text-align center
.user-info-card
  display flex
  justify-content space-between
  @media screen and (max-width 769px)
    flex-wrap wrap
  .left
    text-align center
    margin-right 20px
    @media screen and (max-width 769px)
      flex 100%
      margin-bottom 20px
    .avatar
      img
        border 4px solid $white
        width 120px
    .m-name
      font-size 16px
      font-weight bold
    .m-title
      font-size 14px
      font-style italic
  .desc
    font-size 14px
    font-weight bold
</style>
