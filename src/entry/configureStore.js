import thunk from "redux-thunk";

import { routerMiddleware } from 'connected-react-router';
import { 
    compose, 
    createStore,
    applyMiddleware, 
} from 'redux';

import { createRootReducer }from '../services/redux/reducers';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory()

const resetEnhancer = rootReducer => (state, action) => {
    return rootReducer(state, action);
}

const composeReducer = () => {
    let returnObj = applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk,
        // logger,
        // ... other middlewares ...
    )

    if( process.env.REACT_APP_PROJECT_MODE !== 'PROD') {
        returnObj = composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                thunk,
                // logger,
                // ... other middlewares ...
            ),
        )
    } 

    return returnObj
}

const configureStore = (preloadedState) => {
    return createStore(
        resetEnhancer(createRootReducer(history)), // root reducer with router state
        preloadedState,
        compose(
            composeReducer()
        ),
    )
}

export default configureStore