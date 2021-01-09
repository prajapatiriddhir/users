import {userConstant} from '../constants/user.constants'
import {userServices} from '../services/user.services'

export const userAction = {
    inviteuser
}


function inviteuser(data) {
    return dispatch => {
        dispatch(({
            type: userConstant.INVITE_USERS_REQUEST,
            data: null
        }));
        userServices.inviteUsers(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(({
                            type: userConstant.INVITE_USERS_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(({
                            type:userConstant.INVITE_USERS_FAILURE,
                            data: response
                        }));
                    }
                },
                error => {
                    dispatch(({
                        type:userConstant.INVITE_USERS_FAILURE,
                        data: error.message
                    }));
                }
            );
    };
}