import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import LoginContainer from './LoginContainer';

const setup = (setupProps = {}) => {
    const initialState = {
        login : 'login'
    };
    const store = configureStore()({...initialState});
    const wrapper = shallow(<LoginContainer store={store}/>);

    return {
        store,
        wrapper
    };
};

describe('LoginContainer', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.shallow().find('Menubar').length).toEqual(1);
  });


});
