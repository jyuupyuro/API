import * as API from "../../api"
import * as ActionType from "../action-types";

import { message } from 'antd'

export const CREATE_ACC_action = uid => dispatch => {
    // API.getInfoByUser(uid)
    // .then(info => {

    //     if (info.errorType ==='ValidationException') {
    //         message.error('Error. Refresh page?');
    //     }
    //     else {
    //         dispatch(sso_user_sign_in_success(info.user));
    //     }
    // })
    dispatch(CREATE_ACC_success());
}

export const CREATE_ACC_success = (account) => {
    return {
        type: ActionType.CREATE_ACC,
        account
    };
}

