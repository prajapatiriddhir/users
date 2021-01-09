import {authConstant} from '../constants/auth.constant'
import {authServices} from '../services/auth.services'


export const authAction = {
    login
}



function login(data) {
    return dispatch =>{
        dispatch({
            type:authConstant.LOGIN_REQUEST_ACTION,
            data:null  
        })
        authServices.login(data)
            .then(response=>{
                if(response.token){
                    dispatch({
                        type:authConstant.LOGIN_SUCCESS_ACTION,
                        data:response
                    })
                } else{
                    dispatch({
                        type:authConstant.LOGIN_ERROR_ACTION,
                        data:response
                    })
                }
            }).catch(err=>{
                dispatch({type:authConstant.LOGIN_ERROR_ACTION,payload:err.message})
            })
    }
}
