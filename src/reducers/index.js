import { combineReducers } from 'redux';
import listDataReducer from './listDataReducer';

export default combineReducers({
    listData: listDataReducer
});