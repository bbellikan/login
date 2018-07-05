import { createSelector } from 'reselect';
import * as dataTypes from '../constants/dataTypes';

const getGridData = state => state.gridData;
const getGridCols = state => state.gridCols;

export const getSortedGridData = createSelector(
    [getGridData, getGridCols], (gridData, gridCols) => {
        var sort = {
            header: '',
            direction: '',
            dataType: ''
        };

        Object.keys(gridCols).every(element => {
            if (gridCols[element]["sort"] !== 'n') {
                sort.header = gridCols[element]["header"];
                sort.direction = gridCols[element]["sort"];
                sort.dataType = gridCols[element]["type"];
                return false;
            } else {
                return true;
            }

        });

        if (sort.header) {
            var A, B;
            gridData.sort((a, b) => {
                if (sort.dataType === dataTypes.STRING) {
                    A = a[sort.header].toLowerCase();
                    B = b[sort.header].toLowerCase();

                } else if (sort.dataType === dataTypes.DATE) {
                    A = new Date(a[sort.header]).getTime();
                    B = new Date(b[sort.header]).getTime();

                } else if (sort.dataType === dataTypes.NUMBER) {
                    A = Number(a[sort.header]);
                    B = Number(b[sort.header]);

                } else if (sort.dataType === dataTypes.BOOLEAN) {
                    A = Boolean(a[sort.header]);
                    B = Boolean(b[sort.header]);

                }
                if (A < B) return sort.direction === 'a' ? -1 : 1;
                if (A > B) return sort.direction === 'a' ? 1 : -1;
                return 0;
            });
        }
        return gridData;

    }
);
