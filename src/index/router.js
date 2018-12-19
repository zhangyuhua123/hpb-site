import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import QuestionNew from '@/views/QuestionNew.vue'
import Eco from '@/views/Eco/index.vue'
import Intro from '@/views/About/intro.vue'
import Vision from '@/views/About/vision.vue'
import BOE from '@/views/BOE.vue'
import Policy from '@/views/Policy.vue'
import Record from '@/views/Record.vue'
import Detail from '@/views/Detail.vue'
import Bounty from '@/views/Bounty.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/boe',
      name: 'boe',
      component: BOE
    },
    {
      path: '/',
      name: 'careers',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: Intro
    },
    {
      path: '/about/vision',
      name: 'vision',
      component: Vision
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import(/* webpackChunkName: "faq" */ '@/views/FaqHome.vue')
    },
    {
      path: '/question/new',
      name: 'qnew',
      component: QuestionNew
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: "blog" */ '@/views/BlogHome.vue')
    },
    {
      path: '/client',
      name: 'client',
      component: () => import(/* webpackChunkName: "client" */ '@/views/Client.vue')
    },
    {
      path: '/node/history_records',
      name: 'history_records',
      component: () => import(/* webpackChunkName: "client" */ '@/views/HistoryRecords.vue')
    },
    {
      path: '/ecoystem',
      name: 'eco',
      component: Eco,
      children: [
        {
          path: '',
          component: () => import(/* webpackChunkName: "dapps" */ '@/views/Eco/dapps.vue')
        },
        {
          path: 'exchanges',
          component: () => import(/* webpackChunkName: "exchanges" */ '@/views/Eco/exchanges.vue')
        },
        {
          path: 'explorer',
          component: () => import(/* webpackChunkName: "explorer" */ '@/views/Eco/explorer.vue')
        },
        {
          path: 'partners',
          component: () => import(/* webpackChunkName: "explorer" */ '@/views/Eco/partners.vue')
        },
        {
          path: 'links',
          component: () => import(/* webpackChunkName: "links" */ '@/views/Eco/links.vue')
        }
      ]
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import(/* webpackChunkName: "post" */ '@/views/Post.vue')
    },
    {
      path: '/faq/:id',
      name: 'faqPost',
      component: () => import(/* webpackChunkName: "post" */ '@/views/Post.vue'),
      props: { faq: true }
    },
    {
      path: '/policy',
      name: 'policy',
      component: Policy
    },
    {
      path: '/record',
      name: 'record',
      component: Record
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/bounty',
      name: 'bounty',
      component: Bounty
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
