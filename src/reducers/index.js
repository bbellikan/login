import { combineReducers } from 'redux';
import login from './login';
import gridCols from './gridCols';
import gridData from './gridData';

export default combineReducers({
    login, gridCols, gridData
});