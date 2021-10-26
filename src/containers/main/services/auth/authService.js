import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import crypto from "crypto";

/**
 * Signs in to Firebase using email and password
 * @param {string} email Email address used to sign in
 * @param {string} password Password to login
 * @param {function} callback Callback function when sign in action is completed
 */
export const signInAccount = (email, password, callback) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {     
        callback({
          type: "success",
          result
        });
      })
      .catch(error => {
        callback({
          type: "fail",
          error
        });
      });
};

/**
 * Signs user out from the account
 * @param {function} callback Callback function when sign out action is performed
 */
export const signOutAccount = (callback = () => {}) => {

  firebase
    .auth()
    .signOut()
    .then(result => {
      callback({
        type: "success",
        result
      });
    })
    .catch(error => {
      callback({
        type: "fail",
        error
      });
    });
};
  