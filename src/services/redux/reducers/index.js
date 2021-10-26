import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

/**
 * Containized Redux Reducer
 */
import { mainReducer } from '../../../containers/main/services/redux/reducers'

export const createRootReducer = (history) => combineReducers({
    containers: combineReducers({
      main: mainReducer
    }),
    router: connectRouter(history)
      // ... // rest of your reducers
})