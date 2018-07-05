import * as actionTypes from '../constants/actionTypes';
import dashboard, {initialState} from './login';

describe('reducers', () => {

    const state =
        {
            filter: ''
        };

    describe('dashboard', () => {


        it('should provide the initial state', () => {
            expect(dashboard(undefined, {})).toBe(initialState);
        });

        it('should change state when APPLY_FILTER is triggered', () => {
            expect(dashboard(state, {type: actionTypes.APPLY_FILTER, filter:'someFilter'})).toEqual(
                {
                    filter:'someFilter'
                }
            );
        });

    });

});
