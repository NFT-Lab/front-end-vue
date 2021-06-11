import axios from 'axios';
import router from '@/router/router.js';

const state = {
  user: {},
  loggedIn: false,
  errorMessage: '',
  operas: []
};
const actions = {
  loginUser({ commit }, user) {
    axios
      .post('http://localhost:3100/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        commit('setUser', response.data);
        commit('setLoggedIn');
        localStorage.setItem('user', JSON.stringify(response.data));
        router.push('/');
      })
      .catch(error => {
        commit('setErrorMessage', error.response.status);
      });
  },
  logOut({ commit }) {
    commit('setLoggedOut');
  },
  userOperas({ commit }) {
    axios.get('http://localhost:3100/nft/user').then(response => {
      commit('setOperas', response.data);
    });
  }
};
const mutations = {
  setErrorMessage(state, error) {
    if (error === 400) {
      state.errorMessage =
        'Dati inseriti scorrettamente, prova a reinserire i dati';
    } else if (error === 204) {
      state.errorMessage =
        'Utente non presente nel sistema, prova a reinserire i dati';
    }
  },
  setOperas(state, data) {
    state.operas = data;
  },
  setUser(state, data) {
    state.user = data;
  },
  setLoggedIn(state) {
    state.loggedIn = true;
  },
  setLoggedOut(state) {
    state.loggedIn = false;
    state.user = null;
    localStorage.clear('user');
  }
};
const getters = {
  isAuthenticated: state => {
    return state.loggedIn;
  },
  errorMessage: state => {
    return state.errorMessage;
  },
  operas: state => {
    return state.operas;
  },
  user: state => {
    return state.user;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
