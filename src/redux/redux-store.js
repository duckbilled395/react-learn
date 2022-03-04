import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogs-page-reducer";
import profilePageReducer from "./profile-page-reducer";
import sideBarReducer from "./side-bar-reducer";

let reducers = combineReducers({
    profilePageReducer: profilePageReducer,
    dialogsPageReducer: dialogsPageReducer,
    sideBarReducer: sideBarReducer
});

let store = createStore(reducers);

export default store;

window.store = store;