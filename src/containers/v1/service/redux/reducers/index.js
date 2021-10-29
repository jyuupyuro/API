import * as ActionTypes from '../action-types'

export const account = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.CREATE_ACC: {
            let account = action.user;
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