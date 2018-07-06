import * as types from '../constants/actionTypes'

export const generateCols = () => ({
    type: types.GENERATE_COLS
});

export const updateColOrder = (colNumber, colOrder) => ({
        type: types.UPDATE_COLORDER,
        colNumber, colOrder
});

export const updateColWidth = (colNumber, colWidth) => ({
        type: types.UPDATE_COLWIDTH,
        colNumber, colWidth
});

export const deleteRow = (rowNumber) => ({
        type: types.DELETE_ROW,
        rowNumber
});

export const deleteCol = (colNumber) => ({
        type: types.DELETE_COL,
        colNumber
});

export const updateCell = (rowNumber, header, value) => ({
        type: types.UPDATE_CELL,
        rowNumber, header, value
});

export const updateSort = (colNumber) => ({
    type: types.UPDATE_SORT,
    colNumber
});

export const addNew = () => ({
    type: types.ADD_NEW
});

