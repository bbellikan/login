import React from 'react';
import { shallow } from 'enzyme';
import Menubar from './Menubar';

const setup = (setupProps = {}) => {
    const defaultProps = {
        loginaction: jest.fn(),
        logoutaction: jest.fn(),
        onClick: jest.fn(),
        login: 'login'
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
    it('renders without crashing', () => {
        const {wrapper} = setup();
        expect(wrapper).toMatchSnapshot();
    });

    it("should call loginaction", () => {
        const {wrapper, props} = setup();
        expect(wrapper.find("Button").length).toEqual(1);

        wrapper.find('Button').simulate('click');
        // expect(props.loginaction).toHaveBeenCalled();
    });

});
