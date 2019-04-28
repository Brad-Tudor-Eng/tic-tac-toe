import React from 'react';
import { spy } from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { init as gameInit } from 'redux/reducers/game';

import { Play } from 'routes/Play';

Enzyme.configure({ adapter: new Adapter() })

describe('Play', () => {
  describe('Check Initial State',()=>{
    //modified this test to check for origional error of starting row
    //and column as null
    it('does not allow row and column to start as null', () => {
      const dispatch = spy();
      const component = shallow(<Play dispatch={ dispatch } game={ gameInit() } />);

      expect(component.state()).toEqual({
        endOfGame: false,
        winner: 2,
        row: 0,
        column: 0
      });

    });
  })

  describe('Move submission', () => {
    it('dispatches the appropriate action to the store', () => {
      const dispatch = spy();
      const component = shallow(<Play dispatch={ dispatch } game={ gameInit() } />);

      component.setState({ row: 1, column: 1 });
      expect(component.state()).toEqual({
        endOfGame: false,
        winner: 2,
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
