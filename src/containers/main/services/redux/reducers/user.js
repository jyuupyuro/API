import * as ActionTypes from '../action-types'

export const user = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SSO_USER_SIGN_IN: {
            let user = action.user;
            return ({
                uid : "dummyData"
            })
            // return({
            //     ...state,
            //     ...user[0],
            //     stages: user
            // });
        }
        default: {
            return state;
        }
    }
}