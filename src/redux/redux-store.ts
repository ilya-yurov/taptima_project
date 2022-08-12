import {combineReducers, legacy_createStore as createStore} from "redux";
import mainFormReducer from "./mainFormReducer";


let reducers = combineReducers({
	mainForm: mainFormReducer,
});

let store = createStore(reducers);

export default store;

