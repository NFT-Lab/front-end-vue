import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import store from '@/store';
import operasList from '@/view/operasList.vue';

const localVue = createLocalVue();

//non vede il local storage
describe('operasList.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = shallowMount(operasList, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-container')).toBe(true);
  });
});
