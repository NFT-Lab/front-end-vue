import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import store from '@/store';
import app from '@/app.vue';
import editUserPassword from '@/components/editUserPassword.vue';

const localVue = createLocalVue();

//non vede le rules di validazione
describe('editUserPassword.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = shallowMount(editUserPassword, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('nav')).toBe(true);
  });
});
