import Vue from 'vue'
import MuseUI from 'muse-ui'
import VueI18n from 'vue-i18n'
import MetaInfo from 'vue-meta-info'
import theme from 'muse-ui/lib/theme'
import 'muse-ui/dist/muse-ui.css'
import './iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import uploader from 'vue-simple-uploader'
import vueSmoothScroll from 'vue-smoothscroll'
import App from './App.vue'
import router from './router'
import store from '../store'
import VueLazyload from 'vue-lazyload'
import './registerServiceWorker'
import zh from '../i18n/zh'
import en from '../i18n/en'
import '../../public/css/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.use(VueI18n)
Vue.use(MetaInfo)
Vue.use(vueSmoothScroll)
theme.use('light')
Vue.use(uploader)
Vue.use(VueAxios, axios)
Vue.use(VueLazyload, {
  attempt: 2
})

axios.defaults.baseURL = '/api'
const i18n = new VueI18n({
  locale: store.getters.preferences.lang, // 语言标识
  messages: {
    zh,
    en
  }
})

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
