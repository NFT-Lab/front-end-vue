import axios from 'axios';
import router from '@/router/router.js';

var urlBackEnd = 'http://localhost:8765/NFTService/';
var urlStop = 'http://localhost:3103/';

const state = {
  homeOperas: [],
  opera: {},
  categoriesOpera: [],
  errorMessageOpera: '',
  operas: []
};
const actions = {
  userOperas({ commit }) {
    var url =
      urlStop + `nft/user/${JSON.parse(localStorage.getItem('user')).id}`;
    axios.get(url).then(response => {
      commit('setOperas', response.data);
    });
  },
  getCategories({ commit }) {
    axios.get(urlStop + 'categories').then(response => {
      commit('setCategories', response.data);
    });
  },
  getHomeOperas({ commit }) {
    axios.get(urlStop + 'nft').then(response => {
      commit('setHomeOperas', response.data);
    });
  },
  uploadOpera({ commit }, opera) {
    var url =
      urlStop + `nft/user/${JSON.parse(localStorage.getItem('user')).id}`;
    axios
      .post(url, opera)
      .then(response => {
        commit('setOpera', response.data);
        router.push('/');
      })
      .catch(error => {
        commit('setErrorOpera', error.response.data);
      });
  },
  updateOpera({ commit }, opera) {
    var url = urlStop + `nft/user/${opera.id}`;
    axios
      .post(url, opera, {
        params: opera.id
      })
      .then(response => {
        commit('setOpera', response.data);
      });
  }
};
const mutations = {
  setOperas(state, data) {
    state.operas = data;
  },
  setCategories(state, data) {
    state.categoriesOpera = data;
  },
  setHomeOperas(state, data) {
    state.homeOperas = data;
  },
  setOpera(state, data) {
    state.opera = data;
  },
  setErrorOpera(state) {
    state.errorMessageOpera = 'Errore di connessione al server!';
  }
};
const getters = {
  operas: state => {
    return state.operas;
  },
  categories: state => {
    return state.categoriesOpera;
  },
  homeOperas: state => {
    return state.homeOperas;
  },
  opera: state => {
    return state.opera;
  },
  errorMessageOpera: state => {
    return state.errorMessageOpera;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
