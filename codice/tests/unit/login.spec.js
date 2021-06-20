import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import store from '@/store';
//views
import login from '@/view/LogIn.vue';

const localVue = createLocalVue();

describe('login.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = shallowMount(login, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-container')).toBe(true);
  });
});
