import * as types from '../constants/actionTypes';

export const loginaction = data => ({
    type: types.LOGIN,
    data
});

export const logoutaction = () => ({
    type: types.LOGOUT
});
