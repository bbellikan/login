import React from 'react';
import { shallow } from 'enzyme';
import Col from './Col';

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
        updateClicked:jest.fn(),
        onRightEdge:jest.fn(),
        updateColOrder:jest.fn(),
        updateCell:jest.fn(),
        updateSort : jest.fn(),
        deleteCol : jest.fn(),
        deleteRow:jest.fn(),
    };


    const props = {...defaultProps, ...setupProps};
    const wrapper = shallow(
        <Col {...props}/>
    );

    return {
        props,
        wrapper
    };
};

describe('Col', () => {
    it('renders without crashing', () => {
        const {wrapper} = setup();
        expect(wrapper).toMatchSnapshot();
    });

});
