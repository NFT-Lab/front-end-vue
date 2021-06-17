import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import store from '@/store';
//views
import login from '@/view/LogIn.vue';
import userPage from '@/view/UserPage.vue';
import uploadOpera from '@/view/UploadOpera.vue';
import signUp from '@/view/SignUp.vue';
import home from '@/view/Home.vue';
//components
import viewOperaHome from '@/components/ViewOperaHome.vue';
import showOpera from '@/components/ShowOpera.vue';
import operasList from '@/components/operasList.vue';
import navBar from '@/components/Navbar.vue';
import editUserPassword from '@/components/editUserPassword.vue';
import editUserData from '@/components/editUserData.vue';

const localVue = createLocalVue();

//views
describe('home.vue', () => {
  let vuetify;
  it('Check if content render', async () => {
    const wrapper = shallowMount(home, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-container')).toBe(true);
  });
});

describe('login.vue', () => {
  let vuetify;
  it('Check if content render', async () => {
    const wrapper = shallowMount(login, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-container')).toBe(true);
  });
});

//non vede il local storage
describe('userPage.vue', () => {
  let vuetify;
  it('Check if content render', async () => {
    const wrapper = shallowMount(userPage, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-container')).toBe(true);
  });
});

//non vede le rules di validazione
describe('uploadOpera.vue', () => {
  let vuetify;
  it('Check if content render', async () => {
    const wrapper = shallowMount(uploadOpera, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-container')).toBe(true);
  });
});

describe('signUp.vue', () => {
  let vuetify;
  it('Check if content render', async () => {
    const wrapper = shallowMount(signUp, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-container')).toBe(true);
  });
});

//components
//non vede il local storage
describe('operasList.vue', () => {
  let vuetify;
  it('Check if content render', async () => {
    const wrapper = shallowMount(operasList, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-container')).toBe(true);
  });
});

describe('navBar.vue', () => {
  let vuetify;
  it('Check if content render', async () => {
    const wrapper = shallowMount(navBar, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('nav')).toBe(true);
  });
});

//non vede le rules di validazione
describe('editUserPassword.vue', () => {
  let vuetify;
  it('Check if content render', async () => {
    const wrapper = shallowMount(editUserPassword, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('nav')).toBe(true);
  });
});

//non vede le rules di validazione
describe('editUserData.vue', () => {
  let vuetify;
  it('Check if content render', async () => {
    const wrapper = shallowMount(editUserData, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('nav')).toBe(true);
  });
});

describe('showOpera.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = shallowMount(showOpera, {
      localVue,
      store,
      vuetify,
      propsData: { visiblePage: 'visiblePage' }
    });
    expect(wrapper.contains('v-dialog')).toBe(true);
  });
});

describe('viewOperaHome.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = shallowMount(viewOperaHome, {
      localVue,
      store,
      vuetify,
      propsData: { visiblePage: 'visiblePage' }
    });
    expect(wrapper.contains('v-dialog')).toBe(true);
  });
});
