import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import soReducer from './soReducer';

export default combineReducers({
    form: formReducer,
    salesorders: soReducer
});