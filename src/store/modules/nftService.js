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
        'http://localhost:3100/login',
        {
          name: opera.name,
          description: opera.description,
          author: localStorage.getItem('user').name,
          owner: localStorage.getItem('user').name,
          path: opera.path,
          price: opera.price,
          categories: opera.categories,
          type: opera.type,
          currency: opera.price
        },
        {
          params: localStorage.getItem('user').userId
        }
      )
      .then(response => {
        console.log(response.data);
        commit('setOpera', response.data);
        router.push('/');
      });
  }
};
const mutations = {
  setOpera(state, data) {
    state.opera = data;
  }
};
const getters = {
  opera: state => {
    return state.opera;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
