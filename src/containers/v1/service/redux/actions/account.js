import * as API from "../../api"
import * as ActionType from "../action-types";

import { message } from 'antd'

export const CREATE_ACC_action = (account,ApiKey,Bill) => dispatch => {

    dispatch(CREATE_ACC_success(account));
}

export const CREATE_ACC_success = (account) => {
    return {
        type: ActionType.CREATE_ACC,
        account
    };
}

