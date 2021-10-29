import { combineReducers } from "redux";

/**
 * Main reducers
 */
import {account} from './user'

export const mainReducer = combineReducers({
    account
})