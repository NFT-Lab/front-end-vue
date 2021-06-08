import Vue from 'vue';
import Vuex from 'vuex';
import CurrentUser from '../store/modules/currentUser.js';
import nftService from '../store/modules/nftService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CurrentUser,
    nftService
  }
});
