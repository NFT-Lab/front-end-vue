import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import store from '@/store';
import particle from '@/view/Particle.vue';

const localVue = createLocalVue();

describe('particle.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('Check if content render', () => {
    const wrapper = shallowMount(particle, {
      localVue,
      store,
      vuetify
    });
    expect(wrapper.contains('v-container')).toBe(true);
  });
});
