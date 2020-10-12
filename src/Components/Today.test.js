import React from 'react';
import { shallow } from 'enzyme';
import { FindByTestAttr } from '../../Utils';
import {Today} from './Today';

const setUp = (props = {}) => {
  const component = shallow(<Today {...props} />);
  return component;
};

describe('Today component', () => {
  describe('Initial test render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it('Should render', () => {
      const component = FindByTestAttr(wrapper, 'today');
      expect(component.length).toBe(1);
    });
  });
});