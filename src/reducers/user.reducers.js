import {userConstant} from '../constants/user.constants'
import {status} from '../constants/common'


export function user(state = {},action){
    switch(action.type) {
        case userConstant.INVITE_USER_REQUEST:
            return{
                ...state,
                invite_user_status:status.REQUEST,
                inviteuserdata:action.data
            }
        case userConstant.INVIT_USER_SUCCESS:
            return{
                ...state,
                invite_user_status:status.SUCCESS,
                inviteuserdata:action.data
            }
        case userConstant.INVITE_USER_ERROR:{
            return{
                ...state,
                invite_user_status:status.ERROR,
                inviteuserdata:null
            }
           
        }
        default:{
            return state
        }
         
    }
}