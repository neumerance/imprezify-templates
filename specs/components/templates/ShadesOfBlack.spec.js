import Vue from "vue";
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import ShadesOfBlack from '../../../src/components/templates/ShadesOfBlack';

Vue.use(Vuetify);

describe('ShadesOfBlack', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(
      ShadesOfBlack, {
        propsData: {
          basicInformation: {},
          contactInformation: {},
          workExperiences: [],
          educations: [],
          skills: []
        }
      }
    )
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
});
