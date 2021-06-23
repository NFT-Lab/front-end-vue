import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import store from '@/store';
import signUp from '@/view/SignUp.vue';

const localVue = createLocalVue();

describe('signUp.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const wrapper = shallowMount(signUp, {
    localVue,
    store,
    vuetify
  });
  it('Check if content render', () => {
    expect(wrapper.contains('v-container')).toBe(true);
  });
  it('Check if button is disabled with empty fields', ()=> {
    const name="";
    const surname="";
    const email="";
    const dob="";
    const wallet="";
    const password="";
    const confPassword="";

    var nameInput = wrapper.find('#nameInupt');
    nameInput.element.value = name;
    var surnameInput = wrapper.find('#surnnameInupt');
    surnameInput.element.value = surname;
    var emailInput = wrapper.find('#emailSInput');
    emailInput.element.value = email;
    var dobInput = wrapper.find('#dobInupt');
    dobInput.element.value = dob;
    var walletInput = wrapper.find('#walletInupt');
    walletInput.element.value = wallet;
    var passwordInput = wrapper.find('#passwordSInupt');
    passwordInput.element.value = password;
    var confPasswordInupt = wrapper.find('#confPasswordInupt');
    confPasswordInupt.element.value = confPassword;

    expect(wrapper.vm.isFormValid).toBeFalsy();
    expect(wrapper.find('v-btn').element.hasAttribute('disabled')).not.toBe(true);
  })
});
