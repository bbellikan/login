import * as actions from './login';
import * as types from '../constants/actionTypes';

describe('Login actions', () => {
    it('loginaction should create LOGIN action', () => {
        expect(actions.loginaction('login')).toEqual({
            type: types.LOGIN,
            data: 'login'
        });
    });

    it('logoutaction should create LOGOUT action', () => {
        expect(actions.logoutaction()).toEqual({
            type: types.LOGOUT
        });
    });

});
