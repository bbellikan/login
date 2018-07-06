import gridData, {initialState} from './gridData';

describe('reducers', () => {

    describe('gridData', () => {

        it('should provide the initial state', () => {
            expect(gridData(undefined, {})).toBe(initialState);
        });

    });

});
