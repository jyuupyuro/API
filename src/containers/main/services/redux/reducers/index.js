import { combineReducers } from "redux";

/**
 * Main reducers
 */
import {user} from './user'

export const mainReducer = combineReducers({
    user
})