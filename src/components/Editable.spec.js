import React from 'react';
import { shallow } from 'enzyme';
import Editable from './Editable';

const setup = (setupProps = {}) => {
    const defaultProps = {
        gridCol:{
            "number": 0,
            "order": 0,
            "header": "type",
            "sort": "n",
            "deleted": false,
            "type": "STRING",
            "inputType": "text",
            "width": 150
        },
        rowNumber: 0,
        value:'POS',
        updateCell:jest.fn(),
    };


    const props = {...defaultProps, ...setupProps};
    const wrapper = shallow(
        <Editable {...props}/>
    );

    return {
        props,
        wrapper
    };
};

describe('Editable', () => {
    it('renders without crashing', () => {
        const {wrapper} = setup();
        expect(wrapper).toMatchSnapshot();
    });

});
