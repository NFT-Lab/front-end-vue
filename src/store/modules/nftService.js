import axios from 'axios';
import router from '@/router/router.js';

const state = {
  homeOperas: [],
  opera: {},
  categoriesOpera: [],
  errorMessageOpera: ''
};
const actions = {
  getCategories({ commit }) {
    axios.get('http://localhost:3100/categories').then(response => {
      commit('setCategories', response.data);
    });
  },
  getHomeOperas({ commit }) {
    axios.get('http://localhost:3100/nft').then(response => {
      commit('setHomeOperas', response.data);
    });
  },
  uploadOpera({ commit }, opera) {
    axios
      .post(
        'http://localhost:3100/nft/user',
        {
          name: opera.name,
          description: opera.description,
          author: opera.author,
          owner: opera.owner,
          path: opera.path,
          price: opera.price,
          categories: opera.categories,
          type: opera.type,
          currency: opera.currency
        },
        {
          params: localStorage.getItem('user').userId
        }
      )
      .then(response => {
        commit('setOpera', response.data);
        router.push('/');
      })
      .catch(error => {
        commit('setErrorOpera', error.response.data);
      });
  },
  updateOpera({ commit }, opera) {
    axios
      .post(
        'http://localhost:3100/nft/user',
        {
          name: opera.name,
          description: opera.description,
          author: opera.author,
          owner: opera.owner,
          path: opera.path,
          price: opera.price,
          categories: opera.categories,
          type: opera.type,
          currency: opera.currency
        },
        {
          params: opera.id
        }
      )
      .then(response => {
        commit('setOpera', response.data);
      });
  }
};
const mutations = {
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
