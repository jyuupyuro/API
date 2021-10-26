import * as API from "../../api"
import * as ActionType from "../action-types";

import { message } from 'antd'

export const sso_user_sign_in_action = uid => dispatch => {
    // API.getInfoByUser(uid)
    // .then(info => {

    //     if (info.errorType ==='ValidationException') {
    //         message.error('Error. Refresh page?');
    //     }
    //     else {
    //         dispatch(sso_user_sign_in_success(info.user));
    //     }
    // })
    dispatch(sso_user_sign_in_success());
}

export const sso_user_sign_in_success = (user) => {
    return {
        type: ActionType.SSO_USER_SIGN_IN,
        user
    };
}

export const sso_user_sign_out = () => {
    return {
        type: ActionType.SSO_USER_SIGN_OUT
    };
}