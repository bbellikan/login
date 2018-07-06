import React from 'react';
import { shallow } from 'enzyme';
import ColDelete from './ColDelete';

const setup = (setupProps = {}) => {
    const defaultProps = {
        gridData : [{
            type: 'POS',
            extdesc: 'ABC VONS Store 1797 SAN DIEGO CAUS',
            description: 'POS Transaction VONS Store 1797 SAN DIEGO CAUS',
            amount: '-4.43',
            differed: false,
            date: '2016-02-23'
        }],
        deleteRow:jest.fn(),
    };


    const props = {...defaultProps, ...setupProps};
    const wrapper = shallow(
        <ColDelete {...props}/>
    );

    return {
        props,
        wrapper
    };
};

describe('ColDelete', () => {
    it('renders without crashing', () => {
        const {wrapper} = setup();
        expect(wrapper).toMatchSnapshot();
    });

});
