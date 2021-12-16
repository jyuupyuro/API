import * as API from "../../api/resources/account"
import * as ActionType from "../action-types";

import { message } from 'antd'

export const get_account_success = (accounts) => {
    return {
      type : "GET_ACCOUNT",
      accounts
    }  
}

export const get_account_success2 = (account) => {
    return {
      type : "GET_ACCOUNT_2",
      account
    }
  }

  export const update_account_success = (account) => {
    return {
      type : "UPDATE_ACCOUNT",
      account
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

export const add_account = (account) => dispatch => {

  API.addAccount(account)
  .then((data) => {

      console.log("Add account result",data)

      if (data.status !== 200) {
          if (data.message) {
              message.error("Failed to add account Please enter Valid Informations ", data.message)
          }
      }
      else {
          dispatch(get_account_success2(data.account));
      }
  })
  .catch(err => {
    console.log(err)
  })

}

export const update_account = (account) => dispatch => {

  API.updateAccount(account)
  .then((data) => {

      console.log("updated acc:",data)

      if (data.status !== 200) {    
          if (data.message) {
              message.error("Failed to add account Please enter Valid Informations ", data.message)
          }
      }
      else {
          dispatch(update_account_success(data.account));
          console.log("updated acc:",data.account)
          
      }
  })
  .catch(err => {
    console.log(err)
  })

}