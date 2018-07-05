import * as actions from './login';
import * as types from '../constants/actionTypes';

describe('Dashboard actions', () => {
    it('filter should create APPLY_FILTER action', () => {
        expect(actions.applyFilter('xx')).toEqual({
            type: types.APPLY_FILTER,
            filter: 'xx'
        });
    });

});
