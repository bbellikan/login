import * as actionTypes from '../constants/actionTypes';

export const initialState = {
    login: '',
    time : new Date().getTime()
};

const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                login: action.data==='login' ? action.data : '',
                time:new Date().getTime()
            }
        case actionTypes.LOGOUT:
            return {
                login: '',
                time:new Date().getTime()
            }
        default:
            return state
    }
};

export default dashboard;