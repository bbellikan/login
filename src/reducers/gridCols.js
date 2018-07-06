import * as actionTypes from '../constants/actionTypes';
import * as dataTypes from '../constants/dataTypes';
import gridData from './gridData';

export const initialState = {};

const getType = value => {
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
        return dataTypes.NUMBER;
    } else if (typeof value === 'boolean') {
        return dataTypes.BOOLEAN;
    } else if (/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(value)) {
        return dataTypes.DATE;
    } else if (typeof value === 'string' || value instanceof String) {
        return dataTypes.STRING;
    } else {
        return dataTypes.UNDEFINED;
    }
};
const gridCols = (state = initialState, action) => {
    let colNumber, colOrder, colWidth;
    let updated = {};

    switch (action.type) {
        case actionTypes.GENERATE_COLS:
            let data = gridData(undefined, action);
            let gridCols = {};

            Object.keys(data[0]).forEach((element, index) => {
                let dataType = getType(data[0][element]);

                gridCols[index] = {
                    number: index,
                    order: index,
                    header: element,
                    sort: 'n',
                    deleted: false,
                    type: dataType,
                    inputType: dataType === dataTypes.DATE ? 'date'
                    : dataType === dataTypes.BOOLEAN ? 'checkbox'
                    : dataType === dataTypes.NUMBER ? 'number'
                            : 'text',
                    width: 150
                };

            });
            return { ...gridCols }

        case actionTypes.UPDATE_COLORDER:
            colNumber = action.colNumber;
            colOrder = action.colOrder;

            const myOrder = state[colNumber].order;
            const minOrder = Math.min(myOrder, colOrder);
            const maxOrder = Math.max(myOrder, colOrder);

            Object.keys(state).forEach(item => {
                let itemColOrder = state[item].order;

                let order = itemColOrder >= minOrder && itemColOrder <= maxOrder
                    ? Number(item) === Number(colNumber)
                        ? colOrder
                        : myOrder < colOrder
                            ? itemColOrder - 1
                            : itemColOrder + 1
                    : itemColOrder;

                updated[item] = { ...state[item], order: order };

            });
            return { ...updated };

        case actionTypes.UPDATE_SORT:
            colNumber = action.colNumber;
            const colSort = state[colNumber].sort;

            Object.keys(state).forEach(item => {
                let sort = Number(item) === Number(colNumber)
                    ? colSort === 'a' ? 'd' : 'a'
                    : 'n';

                updated[item] = { ...state[item], sort: sort };

            });
            return { ...updated };
        case actionTypes.DELETE_COL:
            colNumber = action.colNumber;

            Object.keys(state).forEach(item => {
                if(Number(item) !== Number(colNumber)) updated[item] = { ...state[item]};
            });
            return { ...updated };
        case actionTypes.UPDATE_COLWIDTH:
            colNumber = action.colNumber;
            colWidth = action.colWidth;
            return { ...state, [colNumber]: { ...state[colNumber], width: colWidth } };
        
        default:
            return state
    }
};

export default gridCols;

