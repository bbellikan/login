import login, {initialState} from './login';

describe('reducers', () => {

    const state =
        {
            login: ''
        };

    describe('login', () => {


        it('should provide the initial state', () => {
            expect(login(undefined, {})).toBe(initialState);
        });

    });

});
