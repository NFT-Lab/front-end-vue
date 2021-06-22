import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import store from '@/store';
import editUserData from '@/components/editUserData.vue';

const localVue = createLocalVue();

//non vede le rules di validazione
describe('editUserData.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = shallowMount(editUserData, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-dialog')).toBe(true);
  });
});
