import Vuetify from 'vuetify';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import store from '@/store';
import editUserPassword from '@/components/editUserPassword.vue';

const localVue = createLocalVue();

describe('editUserPassword.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const wrapper = shallowMount(editUserPassword, {
    localVue,
    store,
    vuetify
  });
  it('Check if content render', () => {
    expect(wrapper.contains('v-dialog')).toBe(true);
  });
  it('Check if button is disabled with empty fields', ()=> {
    const email="";
    const oldPassword="";
    const newPassword="";

    var emailMPInput = wrapper.find('#emailMPInput');
    emailMPInput.element.value = email;
    var passwordOldInput = wrapper.find('#passwordOldInput');
    passwordOldInput.element.value = oldPassword;
    var passwordNewInput = wrapper.find('#passwordNewInput');
    passwordNewInput.element.value = newPassword;

    expect(wrapper.vm.isFormValid).toBeFalsy();
    expect(wrapper.find('v-btn').element.hasAttribute('disabled')).not.toBe(true);
  });
});
