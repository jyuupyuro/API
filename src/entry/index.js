import 
    React, 
    { 
        useEffect,
        useState
    } 
from 'react';
import { Provider } from "react-redux";

import configureStore, { history } from './configureStore'
import {
    ConnectedRouter
} from "connected-react-router";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { config } from "../config";

/**
 * Container
 */
import App from '../containers/main'

/**
 * Style
 */
import './index.css'

const store = configureStore({});

/** Initialize Firebase */
firebase.initializeApp(config.firebaseConfig);

const ConnectedApp = () => {

    const [ currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((auth, user) => setCurrentUser(user))
    })

    return (
        <Provider store={store}>
            {/* <PersistGate persistor={persistor}> */}
                <ConnectedRouter history={history}>
                    <App currentUser={currentUser} />
                </ConnectedRouter>
            {/* </PersistGate> */}
        </Provider>
    );
}

export default ConnectedApp