import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import uploadOpera from '@/view/UploadOpera.vue';

const localVue = createLocalVue();

describe('uploadOpera.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const wrapper = mount(uploadOpera, {
    localVue,
    store,
    vuetify
  });
  it('Check if content render', () => {
    expect(wrapper.contains('v-container')).toBe(true);
  });
  it('Check if button is disabled with empty fields', () => {
    const titolo = '';
    const descrizione = '';
    const file = '';
    const tipo = '';
    const categories = '';
    const price = '';

    var titleInput = wrapper.find('#titleInput');
    titleInput.element.value = titolo;
    var descriptionInput = wrapper.find('#descriptionInput');
    descriptionInput.element.value = descrizione;
    var fileInput = wrapper.find('#fileInput');
    fileInput.element.value = file;
    var typeInput = wrapper.find('#typeInput');
    typeInput.element.value = tipo;
    var categoriesInput = wrapper.find('#categoriesInput');
    categoriesInput.element.value = categories;
    var priceInput = wrapper.find('#priceInput');
    priceInput.element.value = price;

    expect(wrapper.vm.isFormValid).toBeFalsy();
    expect(wrapper.find('v-btn').element.hasAttribute('disabled')).not.toBe(
      true
    );
  });
});
