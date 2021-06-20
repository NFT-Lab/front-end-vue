import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import store from '@/store';
import app from '@/app.vue';
import editUserData from '@/components/editUserData.vue';

const localVue = createLocalVue();

describe('app.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = shallowMount(app, {
      localVue,
      VueRouter,
      store,
      vuetify
    });
    expect(wrapper.contains('v-app')).toBe(true);
  });
});
