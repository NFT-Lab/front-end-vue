import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import store from '@/store';
import signUp from '@/view/SignUp.vue';

const localVue = createLocalVue();

describe('signUp.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = shallowMount(signUp, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-container')).toBe(true);
  });
});
