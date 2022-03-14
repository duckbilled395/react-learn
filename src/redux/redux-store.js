import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogs-page-reducer";
import profilePageReducer from "./profile-page-reducer";
import sideBarReducer from "./side-bar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);
// console.log(store.getState())
export default store;

window.store = store;