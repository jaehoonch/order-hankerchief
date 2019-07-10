import {
    CREATE_SALESORDER,
    GET_SALESORDERS
} from '../actions/types';

export default (state = {}, action) => {
    // console.log(action);
    
    switch(action.type){
        case GET_SALESORDERS:
            // const newState = {...state};
            // newState[action.payload.id] = action.payload;
            // return newState;
            return { ...state, ...action.payload.d };
        case CREATE_SALESORDER:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}