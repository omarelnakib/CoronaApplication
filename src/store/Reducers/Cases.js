import *as types from '../ActionTypes';
import initialState from '../initialState';

export default function (state = initialState.Auth , action){

    switch (action.type) {
       
        case types.GET_SURVEY:
            return{
                ...state,
                data: action.data,
            }
            case types.SET_CASE:
            return{
                ...state,
                data: action.data,
            }
        default:
          return {...state};
    }

}