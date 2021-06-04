import axios from 'axios';
import router from '@/router/router.js';

const state = {
  user: {},
  errorMessage: null
};
const getters = {
  isAuthenticated(state) {
    console.log(state.user);
    if (state.user === null) return false;
    else return true;
  },
  errorMessage(state) {
    return state.errorMessage;
  }
};
const actions = {
  loginUser({ commit }, user) {
    axios
      .post('http://localhost:3100/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data) {
          commit('setUser', response.data);
          localStorage.setItem('user', response.data);
          router.push('/');
        }
      })
      .catch(error => {
        commit('setErrorMessage', error.response.status);
      });
  }
};
const mutations = {
  setErrorMessage(data) {
    if (data === 400) {
      errorMessage = 'Dati inseriti scorrettamente, prova a reinserire i dati';
    } else if (data === 204) {
      errorMessage =
        'Utente non presente nel sistema, prova a reinserire i dati';
    }
  },
  setUser(state, data) {
    state.user = data;
  },
  logOut(state) {
    state.user = null;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
