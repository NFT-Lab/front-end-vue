import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import store from '@/store';
import editOpera from '@/components/editOpera.vue';

const localVue = createLocalVue();

//non vede le rules di validazione
describe('editOpera.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = shallowMount(editOpera, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-dialog')).toBe(true);
  });
});
