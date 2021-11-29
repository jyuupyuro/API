import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

/**
 * Containized Redux Reducer
 */
import { mainReducer } from '../../../containers/main/services/redux/reducers'
import { v1Reducer} from '../../../containers/v1/service/redux/reducers/index'

export const createRootReducer = (history) => combineReducers({
    containers: combineReducers({
      main: mainReducer,
      v1 : v1Reducer
    }),
    router: connectRouter(history)
      // ... // rest of your reducers
})