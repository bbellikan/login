import * as actionTypes from '../constants/actionTypes';

export const initialState = [{
        type: 'POS',
        extdesc: 'ABC VONS Store 1797 SAN DIEGO CAUS',
        description: 'POS Transaction VONS Store 1797 SAN DIEGO CAUS',
        amount: '-4.43',
        differed: false,
        date: '2016-02-23'
    }, {
        type: 'CC',
        extdesc: 'Amazon.com',
        description: 'online retailer Amazon.com',
        amount: '-76.99',
        differed: true,
        date: '2016-04-08'
    }, {
        type: 'POS',
        extdesc: 'shop #1',
        description: 'online retailer #1',
        amount: '-100',
        differed: false,
        date: '2016-05-12'
    }, {
        type: 'DDeb',
        extdesc: 'shop #2',
        description: 'retailer #2',
        amount: '-120',
        differed: false,
        date: '2016-06-17'
    }, {
        type: 'POS',
        extdesc: 'shop #3',
        description: 'online retailer #3',
        amount: '-130',
        differed: false,
        date: '2016-08-20'
    }, {
        type: 'CC',
        extdesc: 'shop #4',
        description: 'retailer #4',
        amount: '-320',
        differed: true,
        date: '2016-10-30'
    }, {
        type: 'POS',
        extdesc: 'shop #5',
        description: 'online retailer #5',
        amount: '-101',
        differed: false,
        date: '2016-11-01'
    }];

const gridData = (state = initialState, action) => {
    var newArray;
    switch (action.type) {
        case actionTypes.DELETE_ROW:
            newArray = state.map(item => item);
            newArray.splice(action.rowNumber, 1);
            return newArray;

        case actionTypes.ADD_NEW:
            newArray = state.map(item => item);
            newArray.push({type: '',
                extdesc: '',
                description: '',
                amount: '',
                differed: false,
                date: ''});
            return newArray;

        case actionTypes.UPDATE_CELL:
            newArray = state.map(item => item);
            newArray[action.rowNumber][action.header] = action.value;
            return newArray;

        default:
            return state
    }
};

export default gridData;