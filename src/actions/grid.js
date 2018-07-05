import * as types from '../constants/actionTypes'

export const generateCols = () => ({
    type: types.GENERATE_COLS
});

export const updateColOrder = (colNumber, colOrder) => dispatch => {
    dispatch({
        type: types.UPDATE_COLORDER,
        colNumber, colOrder
    })
};

export const updateColWidth = (colNumber, colWidth) => dispatch => {
    dispatch({
        type: types.UPDATE_COLWIDTH,
        colNumber, colWidth
    })
};

export const deleteRow = (rowNumber) => dispatch => {
    dispatch({
        type: types.DELETE_ROW,
        rowNumber
    })
};

export const deleteCol = (colNumber) => dispatch => {
    dispatch({
        type: types.DELETE_COL,
        colNumber
    })
};


export const updateCell = (rowNumber, header, value) => dispatch => {
    dispatch({
        type: types.UPDATE_CELL,
        rowNumber, header, value
    })
};

export const updateSort = (colNumber) => dispatch => {
    dispatch({
        type: types.UPDATE_SORT,
        colNumber
    })
};

