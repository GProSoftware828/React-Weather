import React from 'react';
import { shallow } from 'enzyme';
import { FindByTestAttr } from '../../Utils';
import {WeekDays} from './WeekDays';

const setUp = (props = {}) => {
  const component = shallow(<WeekDays {...props} />);
  return component;
};

describe('WeekDays component', () => {
  describe('Initial test render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it('Should render', () => {
      const component = FindByTestAttr(wrapper, 'weekday');
      expect(component.length).toBe(1);
    });
  });
});