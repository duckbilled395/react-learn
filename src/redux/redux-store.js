import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogsPageReducer from './dialogs-page-reducer';
import profilePageReducer from './profile-page-reducer';
import sideBarReducer from './side-bar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware  from 'redux-thunk';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// console.log(store.getState())
export default store;

window.store = store;