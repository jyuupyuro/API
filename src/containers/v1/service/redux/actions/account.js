import * as API from "../../api/resources/account";
import * as ActionType from "../action-types";

import { message } from "antd";
import { goBackToPrev } from "../../navigation/services";

export const get_account_success = (accounts) => {
  return {
    type: "GET_ACCOUNT",
    accounts,
  };
};

export const create_account_success = (account) => {
  return {
    type: "CREATE_ACCOUNT",
    account,
  };
};

export const update_account_success = (account) => {
  return {
    type: "UPDATE_ACCOUNT",
    account,
  };
};

export const get_accounts = () => (dispatch) => {
  API.getAllACC()
    .then((data) => {
      if (data.status !== 200) {
        if (data.message) {
          message.error("Failed to get account: ", data.message);
        }
      } else {
        dispatch(get_account_success(data.accounts));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const add_account = (account) => (dispatch) => {
  API.addAccount(account)
    .then((data) => {
      if (data.status !== 200) {
        if (data.message) {
          message.error(
            "Failed to add account Please enter Valid Informations ",
            data.message
          );
        }
      } else {
        dispatch(create_account_success(data.account));
        dispatch(goBackToPrev());
        message.success("Successfully added new account");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const update_account = (account) => (dispatch) => {
  message.loading({
    content: "Please wait. Account is being updated..",
    duration: 0.1,
  });

  API.updateAccount(account)
    .then((data) => {
      if (data.status !== 200) {
        if (data.message) {
          message.error(
            "Failed to add account Please enter Valid Informations ",
            data.message
          );
        }
      } else {
        dispatch(update_account_success(data.account));
        dispatch(goBackToPrev());

        message.success("Successfully updated account");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
