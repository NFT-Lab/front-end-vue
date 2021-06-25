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
      .post(urlBackEnd + 'login', {
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
    localStorage.clear('user');
  },
  signUp({ commit }, user) {
    axios
      .post(urlBackEnd + 'signup', {
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
    var url = urlBackEnd + `user/${JSON.parse(localStorage.getItem('user')).id}`;
    console.log(user);
    axios
      .put(url, {
        password: user.password,
        name: user.name,
        surname: user.surname,
        email: user.email,
        dob: user.dob,
        wallet: user.wallet
      })
      .then(response => {
        commit('setUser', response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
      }).catch(error =>{
        commit('setErrorMessageMod', error.response.status);
      })
  },
  updatePassword({}, user) {
    axios.put(urlBackEnd + 'user/password', {
      email: user.email,
      oldPassword: user.oldPassword,
      newPassword: user.newPassword
    }).catch(error =>{
      commit('setErrorMessageMod', error.response.status);
    })
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
    } else if (error === 404) {
      state.errorMessageLog =
        'Utente non presente nel sistema, prova a reinserire i dati';
    }
  },
  setErrorMessageMod(state, error) {
    if (error === 400) {
      state.errorMessageLog =
        'Dati inseriti scorrettamente, prova a reinserire i dati';
    } else if (error === 404) {
      state.errorMessageLog =
        'Utente non presente nel sistema, prova a reinserire i dati';
    } else if (error === 417) {
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
  }
};
const getters = {
  myGetRootState: (state, getters, rootState) => {
    return rootState
  },
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
