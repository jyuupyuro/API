import * as ActionTypes from '../action-types'

const defaultstate = {
    byAccountId: {}
}
export const account = (state = defaultstate, action) => {
    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "GET_ACCOUNT": {
            
            
            action.accounts.map(account => {
              newState.byAccountId[account.accountID] = account
            })
          }
          return newState
        case "CREATE_ACCOUNT": {
            
            
            newState.byAccountId[action.account.accountID] = action.account
            return newState
        }
        case "UPDATE_ACCOUNT": {
            
            
            newState.byAccountId[action.account.accountID] = action.account
            return newState
          }

        default: {
            return state;
        }
    }
}