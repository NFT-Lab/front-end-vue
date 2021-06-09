import axios from 'axios';
import router from '@/router/router.js';

const state = {
  opera: {},
  errorMessageOpera: ''
};
const actions = {
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
  setOpera(state, data) {
    state.opera = data;
  },
  setErrorOpera(state) {
    state.errorMessageOpera = 'Errore di connessione al server!';
  }
};
const getters = {
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
