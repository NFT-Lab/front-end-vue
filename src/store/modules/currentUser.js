import axios from 'axios';
import router from '@/router/router.js';

var urlBackEnd = 'http://localhost:8765/UserService/';
var urlStop = 'http://localhost:3100/';

const state = {
  user: {},
  loggedIn: false,
  errorMessageLog: '',
  errorMessageSig: ''
};
const actions = {
  loginUser({ commit }, user) {
    axios
      .post(urlStop + 'login', {
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
        commit('setErrorMessageLog', error.response.status);
      });
  },
  logOut({ commit }) {
    commit('setLoggedOut');
  },
  signUp({ commit }, user) {
    axios
      .post(urlStop + 'signup', {
        email: user.email,
        password: user.password,
        name: user.name,
        surname: user.surname,
        dob: user.dob,
        wallet: user.wallet
      })
      .then(response => {
        commit('setUser', response.data);
        commit('setLoggedIn');
        localStorage.setItem('user', JSON.stringify(response.data));
        router.push('/');
      })
      .catch(error => {
        commit('setMessageErrorSig', error.response.status);
      });
  },
  updateUser({ commit }, user) {
    var url = urlStop + `user/${JSON.parse(localStorage.getItem('user')).id}`;
    console.log(user);
    axios
      .put(url, {
        password: user.password,
        name: user.name,
        surname: user.surname,
        email: user.email,
        dob: JSON.parse(localStorage.getItem('user')).dob,
        wallet: JSON.parse(localStorage.getItem('user')).wallet
      })
      .then(response => {
        commit('setUser', response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
      });
  },
  updatePassword({}, user) {
    axios.put(urlStop + 'user/password', {
      email: user.email,
      oldPassword: user.oldPassword,
      newPassword: user.newPassword
    });
  }
};
const mutations = {
  setMessageErrorSig(state, error) {
    if (error === 400) {
      state.errorMessageSig =
        'Dati inseriti scorrettamente, prova a reinserire i dati';
    } else if (error === 409) {
      state.errorMessageSig = 'Email già presente nel sistema';
    } else if (error === 500) {
      ('Server non raggiungibile');
    }
  },
  setErrorMessageLog(state, error) {
    if (error === 400) {
      state.errorMessageLog =
        'Dati inseriti scorrettamente, prova a reinserire i dati';
    } else if (error === 204) {
      state.errorMessageLog =
        'Utente non presente nel sistema, prova a reinserire i dati';
    }
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
  errorMessageLog: state => {
    return state.errorMessageLog;
  },
  errorMessageSig: state => {
    return state.errorMessageSig;
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
