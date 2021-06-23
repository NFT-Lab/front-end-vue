import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import store from '@/store';
import login from '@/view/LogIn.vue';

const localVue = createLocalVue();

describe('login.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const wrapper = shallowMount(login, {
    localVue,
    store,
    vuetify
  });
  it('Check if content render', () => {
    expect(wrapper.contains('v-container')).toBe(true);
  });
  it('Check if button is disabled with empty fields', ()=> {
    const email="";
    const password="";

    var emailInput = wrapper.find('#emailInput');
    emailInput.element.value = email;
    var passwordInput = wrapper.find('#passwordInput');
    passwordInput.element.value = password;

    expect(wrapper.vm.isFormValid).toBeFalsy();
    expect(wrapper.find('v-btn').element.hasAttribute('disabled')).not.toBe(true);
  });
});
