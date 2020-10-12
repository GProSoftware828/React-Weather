import React from 'react';
import { shallow } from 'enzyme';
import { FindByTestAttr } from '../../Utils';
import {Week} from './Week';

const setUp = (props = {}) => {
  const component = shallow(<Week {...props} />);
  return component;
};

describe('Week component', () => {
  describe('Initial test render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it('Should render', () => {
      const component = FindByTestAttr(wrapper, 'week');
      expect(component.length).toBe(1);
    });
  });
});