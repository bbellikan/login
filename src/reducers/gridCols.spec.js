import gridCols, {initialState} from './gridCols';
import * as actionTypes from '../constants/actionTypes';
import * as dataTypes from '../constants/dataTypes';
import gridData from './gridData';

describe('reducers', () => {

    describe('gridCols', () => {

        it('should provide the initial state', () => {
            expect(gridCols(undefined, {})).toBe(initialState);
        });

/*
        const gCols = {
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
        it('should provide the initial state', () => {
            console.log(initialState);
            expect(gridCols(initialState, {type:actionTypes.GENERATE_COLS})).toBe(...gCols);
        });*/


    });

});
