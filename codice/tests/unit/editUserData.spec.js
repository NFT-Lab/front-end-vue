import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import store from '@/store';
import editUserData from '@/components/editUserData.vue';

const localVue = createLocalVue();

describe('editUserData.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const wrapper = shallowMount(editUserData, {
    localVue,
    store,
    vuetify
  });
  it('Check if content render', () => {
    expect(wrapper.contains('v-dialog')).toBe(true);
  });
  it('Check if button is disabled with empty fields', () => {
    const name = '';
    const surname = '';
    const dob = '';
    const wallet = '';
    const password = '';

    var nameMInput = wrapper.find('#nameMInput');
    nameMInput.element.value = name;
    var surnameMInput = wrapper.find('#surnameMInput');
    surnameMInput.element.value = surname;
    var dobMInput = wrapper.find('#dobMInput');
    dobMInput.element.value = dob;
    var walletMInput = wrapper.find('#walletMInput');
    walletMInput.element.value = wallet;
    var passwordMInput = wrapper.find('#passwordMInput');
    passwordMInput.element.value = password;

    expect(wrapper.vm.isFormValid).toBeFalsy();
    expect(wrapper.find('v-btn').element.hasAttribute('disabled')).not.toBe(
      true
    );
  });
});
