import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr'
import soReducer from './soReducer';

import {
    pendingTasksReducer // The redux reducer
  } from 'react-redux-spinner';

export default combineReducers({
    toastr: toastrReducer,
    pendingTasks: pendingTasksReducer,
    form: formReducer,
    salesorders: soReducer
});