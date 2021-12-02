import * as API from "../../api/resources/account"
import * as ActionType from "../action-types";

import { message } from 'antd'

// export const CREATE_ACC_action = (account,ApiKey,Bill) => dispatch => {

//     dispatch(CREATE_ACC_success(account));
//     dispatch(CREATE_ACC_success(ApiKey));
//     dispatch(CREATE_ACC_success(Bill));
// }

// export const CREATE_ACC_success = (account, ApiKey, Bill) => {
//     return {
//         type: ActionType.CREATE_ACC,
//         account,
//         ApiKey,
//         Bill
//     };
// }

export const get_account_success = (accounts) => {
    return {
      type : "GET_ACCOUNT",
      accounts
    }
  }

  export const get_accounts = () => dispatch => {
  
    API.getAllACC()
    .then((data) => {
  
        console.log("Get account result",data)

        if (data.status !== 200) {
            if (data.message) {
                message.error("Failed to get account: ", data.message)
            }
        }
        else {
            console.log("Inside else")
            dispatch(get_account_success(data.accounts));
        }
    })
    .catch(err => {
      console.log(err)
    })

  }