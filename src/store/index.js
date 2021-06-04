import Vue from 'vue';
import Vuex from 'vuex';
import CurrentUser from '@/store/modules/currentUser.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CurrentUser
  }
});
