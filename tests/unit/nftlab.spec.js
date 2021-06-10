import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import store from '@/store';
import login from '@/view/LogIn.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);

describe('Login form', () => {
  it('text field name change', () => {
    const wrapper = shallowMount(login, { localVue, store, Vuetify });
    const nameInput = wrapper.find('#emailInput');
    expect(nameInput.element.value).toBe('');
    nameInput.trigger('click');
    expect(nameInput.element.value).not.toBe('');
  });
});

describe('login', () => {
  it('should render', () => {
    const wrapper = shallowMount(login, {
      store,
      localVue
    });
    expect(wrapper).not.toBe(null);
  });
});
