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
            case types.GET_CASES:
                return{
                    ...state,
                    data: action.data,
                }
            case types.GET_CASE_DETAILS:
                return{
                    ...state,
                    data: action.data,
                }
                case types.SEND_TESTS:
                    return{
                        ...state,
                        data: action.data,
                    }  
                    case types.GET_TESTS:
                    return{
                        ...state,
                        data: action.data,
                    }
        default:
          return {...state};
    }

}