import * as ActionTypes from '../action-types'

const defaultstate = {
    byAccountId: {}
}
export const account = (state = defaultstate, action) => {
    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "GET_ACCOUNT": {
            
            console.log("Get accounts")
            
            action.accounts.map(account => {
              newState.byAccountId[account.accountID] = account
            })
          }
          console.log(newState)
          return newState
        case "GET_ACCOUNT_2": {
            
            console.log("Get accounts 2 ")
            
            newState.byAccountId[action.account.accountID] = action.account
            console.log("newState",newState)
            return newState
        }
        default: {
            return state;
        }
    }
}