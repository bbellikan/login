import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import GridContainer from './GridContainer';

const setup = (setupProps = {}) => {
    const gridData = [{
            type: 'POS',
            extdesc: 'ABC VONS Store 1797 SAN DIEGO CAUS',
            description: 'POS Transaction VONS Store 1797 SAN DIEGO CAUS',
            amount: '-4.43',
            differed: false,
            date: '2016-02-23'
        }];
    const gridCols = {
        "0": {
            "number": 0,
            "order": 0,
            "header": "type",
            "sort": "n",
            "deleted": false,
            "type": "STRING",
            "inputType": "text",
            "width": 150
        },
        "1": {
            "number": 1,
            "order": 1,
            "header": "extdesc",
            "sort": "n",
            "deleted": false,
            "type": "STRING",
            "inputType": "text",
            "width": 150
        },
        "2": {
            "number": 2,
            "order": 2,
            "header": "description",
            "sort": "n",
            "deleted": false,
            "type": "STRING",
            "inputType": "text",
            "width": 150
        },
        "3": {
            "number": 3,
            "order": 3,
            "header": "amount",
            "sort": "n",
            "deleted": false,
            "type": "NUMBER",
            "inputType": "text",
            "width": 150
        },
        "4": {
            "number": 4,
            "order": 4,
            "header": "differed",
            "sort": "n",
            "deleted": false,
            "type": "BOOLEAN",
            "inputType": "checkbox",
            "width": 150
        },
        "5": {
            "number": 5,
            "order": 5,
            "header": "date",
            "sort": "n",
            "deleted": false,
            "type": "DATE",
            "inputType": "date",
            "width": 150
        }
    };
    const login= setupProps.login;

    const store = configureStore()({gridData,gridCols,login});
    const wrapper = shallow(<GridContainer store={store}/>);

    return {
        store,
        wrapper
    };
};

describe('GridContainer', () => {
    test('renders without crashing', () => {
        const {wrapper} = setup({
            login: {
                login: '',
                time: new Date().getTime()
            }
        });
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.shallow().find('Grid').length).toEqual(0);

    });

    test('renders grid when loggedin without crashing', () => {
        const {wrapper} = setup({
            login: {
                login: 'login',
                time: new Date().getTime()
            }
        });
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.shallow().find('Grid').length).toEqual(1);

    });


});
