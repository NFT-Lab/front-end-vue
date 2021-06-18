import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import store from '@/store';
import navBar from '@/components/Navbar.vue';

const localVue = createLocalVue();

describe('navBar.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = shallowMount(navBar, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('nav')).toBe(true);
  });
  it('Should render user name if isLogged=true', () => {
    const wrapper = shallowMount(navBar, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.html().includes('.white--text')).toBe(false);
    wrapper.setData({ isLogged: true });
    expect(wrapper.html().includes('.white--text')).toBe(true);
  });
});
