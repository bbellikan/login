import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import DashboardContainer from './LoginContainer';

const setup = (setupProps = {}) => {
    const initialState = {
        dashboard: {filter : ''},
        states:{statesData : {}},
        population: {populationData: []},
        jobs: {jobsData: []},
        nurse: {nurseData: []}
    };
    const store = configureStore()({...initialState});
    const wrapper = shallow(<DashboardContainer store={store}/>);

    return {
        store,
        wrapper
    };
};

describe('DashboardContainer', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.shallow().find('Menubar').length).toEqual(1);
  });


});
