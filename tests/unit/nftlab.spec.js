import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import store from '@/store';
import login from '@/view/LogIn.vue';
import userPage from '@/view/UserPage.vue';
import uploadOpera from '@/view/UploadOpera.vue';
import viewOperaHome from '@/components/ViewOperaHome.vue';
import showOpera from '@/components/ShowOpera.vue';

const localVue = createLocalVue();

describe('login.vue', () => {
  let vuetify;
  let actions;
  beforeEach(() => {
    vuetify = new Vuetify();
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    };
  });
  it('Check if content render', async () => {
    const wrapper = shallowMount(login, { localVue, store, vuetify });
    await wrapper.find('v-btn').trigger('click');
    expect(actions.actionClick).toHaveBeenCalled();
  });
  it('Call login action', () => {
    const wrapper = shallowMount(login, { localVue, store, vuetify });
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
      propsData: { opera: 'opera' }
    });
    expect(wrapper.contains('v-dialog')).toBe(true);
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
      propsData: { opera: 'opera' }
    });
    expect(wrapper.contains('v-dialog')).toBe(true);
  });
});
