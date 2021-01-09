import {authConstant } from '../constants/auth.constant'
import {status} from '../constants/common'


let initialState = {
    user:null
};


export default (state=initialState,action) =>{
    switch(action.type){
        case authConstant.LOGIN_REQUEST_ACTION:
            return{
                ...state,
               login_request_status:status.REQUEST,
                user:action.data
            }
        case authConstant.LOGIN_SUCCESS_ACTION:
            return{
                ...state,
                login_success_status:status.SUCCESS,
                user:action.data
            }   
        case authConstant.LOGIN_ERROR_ACTION:
            return{
                ...state,
                login_error_status:status.ERROR,
                user:null
            }
        default:
            return{
                ...state
            }
    }
}