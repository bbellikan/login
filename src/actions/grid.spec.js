import * as actions from './grid';
import * as types from '../constants/actionTypes';

describe('Grid actions', () => {
    it('generateCols should create GENERATE_COLS action', () => {
        expect(actions.generateCols()).toEqual({
            type: types.GENERATE_COLS
        });
    });

    it('updateColOrder should create UPDATE_COLORDER action', () => {
        expect(actions.updateColOrder(1,2)).toEqual({
            type: types.UPDATE_COLORDER,
            colNumber:1, 
            colOrder:2
        });
    });

    it('updateColWidth should create UPDATE_COLWIDTH action', () => {
        expect(actions.updateColWidth(1,200)).toEqual({
            type: types.UPDATE_COLWIDTH,
            colNumber:1, 
            colWidth:200
        });
    });

    it('deleteRow should create DELETE_ROW action', () => {
        expect(actions.deleteRow(1)).toEqual({
            type: types.DELETE_ROW,
            rowNumber:1
        });
    });

    it('deleteCol should create DELETE_COL action', () => {
        expect(actions.deleteCol(1)).toEqual({
            type: types.DELETE_COL,
            colNumber:1
        });
    });

    it('updateCell should create UPDATE_CELL action', () => {
        expect(actions.updateCell(1,'type','POS')).toEqual({
            type: types.UPDATE_CELL,
            rowNumber:1, 
            header:'type',
            value:'POS'
        });
    });

    it('updateSort should create UPDATE_SORT action', () => {
        expect(actions.updateSort(1)).toEqual({
            type: types.UPDATE_SORT,
            colNumber:1
        });
    });

    it('addNew should create ADD_NEW action', () => {
        expect(actions.addNew()).toEqual({
            type: types.ADD_NEW
        });
    });

});
