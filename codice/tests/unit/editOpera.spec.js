import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import store from '@/store';
import editOpera from '@/components/editOpera.vue';

const localVue = createLocalVue();

describe('editOpera.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const wrapper = shallowMount(editOpera, {
    localVue,
    store,
    vuetify,
  });
  it('Check if content render', () => {
    expect(wrapper.contains('v-dialog')).toBe(true);
  });
});
