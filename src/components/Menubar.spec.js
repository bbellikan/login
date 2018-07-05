import React from 'react';
import { shallow } from 'enzyme';
import Menubar from './Menubar';

const setup = (setupProps = {}) => {
    const defaultProps = {
        applyFilter: jest.fn(),
        filter:"LA"
    };

    const props = {...defaultProps, ...setupProps};
    const wrapper = shallow(
        <Menubar {...props}/>
    );

    return {
        props,
        wrapper
    };
};

describe('Menubar', () => {
    test('renders without crashing', () => {
        const {wrapper} = setup();
        expect(wrapper).toMatchSnapshot();
    });

    it("should call applyFilter", () => {
        const {wrapper, props} = setup();
        expect(wrapper.find("Button").length).toEqual(1);

        wrapper.find('Button').simulate('click');
        expect(props.applyFilter).toHaveBeenCalled();
    });

});
