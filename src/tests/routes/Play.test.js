import React from 'react';
import { spy } from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { init as gameInit } from 'redux/reducers/game';

import { Play } from 'routes/Play';

Enzyme.configure({ adapter: new Adapter() })

describe('Play', () => {  
  
  describe('Inital State',()=>{
    it('Initial state shouldn\'t have row or column as null', () => {
      const dispatch = spy();
      const component = shallow(<Play dispatch={ dispatch } game={ gameInit() } />);

      expect(component.state()).toEqual({
        row: 0,
        column: 0
      });
    });
  });

  describe('Move submission', () => {
    it('dispatches the appropriate action to the store', () => {
      const dispatch = spy();
      const component = shallow(<Play dispatch={ dispatch } game={ gameInit() } />);

      component.setState({ row: 1, column: 1 });
      expect(component.state()).toEqual({
        row: 1,
        column: 1
      });

      const input = component.find('input')
      input.simulate('click')
      expect(dispatch.lastCall.args[0]).toEqual({
        type: 'MOVE',
        row: 1,
        column: 1
      });
    });
  });

})
