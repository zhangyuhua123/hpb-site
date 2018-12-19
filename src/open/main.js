import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MuseUI from 'muse-ui'
import MetaInfo from 'vue-meta-info'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import store from '../store'
import VueAxios from 'vue-axios'
import 'muse-ui/dist/muse-ui.css'
import zh from '../i18n/zh'
import en from '../i18n/en'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
Vue.use(MuseUI)
Vue.use(VueI18n)
Vue.use(MetaInfo)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
axios.defaults.baseURL = '/api'
const i18n = new VueI18n({
  locale: store.getters.preferences.lang, // 语言标识
  messages: {
    zh,
    en
  }
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
