import React from 'react';
import { shallow } from 'enzyme';
import CellHeader from './CellHeader';

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
        updateClicked:jest.fn(),
        onRightEdge:jest.fn(),
        updateColOrder:jest.fn(),
        updateSort : jest.fn(),
        deleteCol : jest.fn(),
    };

    const props = {...defaultProps, ...setupProps};
    const wrapper = shallow(
        <CellHeader {...props}/>
    );

    return {
        props,
        wrapper
    };
};

describe('CellHeader', () => {
    it('renders without crashing', () => {
        const {wrapper} = setup();
        expect(wrapper).toMatchSnapshot();
    });

});
