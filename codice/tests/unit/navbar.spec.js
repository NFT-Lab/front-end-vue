import Vuetify from 'vuetify';
import { shallowMount, createLocalVue} from '@vue/test-utils';
import store from '@/store';
import navBar from '@/components/Navbar.vue';

const localVue = createLocalVue();

describe('navBar.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const wrapper = shallowMount(navBar, {
    localVue,
    store,
    vuetify
  });
  it('Check if content render', () => {
    expect(wrapper.contains('nav')).toBe(true);
  });
});
