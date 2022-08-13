import {combineReducers, legacy_createStore as createStore} from "redux";
import goodsDataReducer from "./goodsDataReducer";
import mainFormReducer from "./mainFormReducer";


let reducers = combineReducers({
	mainForm: mainFormReducer,
	goodsData: goodsDataReducer
});

let store = createStore(reducers);

export default store;

