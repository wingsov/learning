import {legacy_createStore as createStore, combineReducers} from "redux";
import {cashReduser} from "./cashReduser";
import {customerReduser} from "./customerReduser";
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReduser = combineReducers({
    cash: cashReduser,
    customers : customerReduser,
})


export const store = createStore(rootReduser, composeWithDevTools());