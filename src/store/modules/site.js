import {
  SET_PREFERENCE
} from '../mutation-types'
import { stat } from 'fs';

const state = {
  preferences: {
    lang: (navigator.language.match(/zh/) ? 'zh' : 'en')
  }
}

const getters = {
  preferences: state => state.preferences
}

const mutations = {
  [SET_PREFERENCE] (state, objs) {
    state.preferences = Object.assign({}, state.preferences, objs)
  },
}

export default {
  state,
  getters,
  mutations
}
