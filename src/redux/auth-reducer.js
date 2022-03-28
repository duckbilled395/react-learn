import {authAPI} from "../api/api";
import {setStatus} from "./profile-page-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_AUTH_ERROR = 'GET_AUTH_ERROR'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        // case GET_AUTH_ERROR:
        //     return {
        //         ...
        //     }
        default:
            return state;
    }
}

export const setAuthUserData = (userId,email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth
    }
});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe, setStatus, setSubmitting) => (dispatch) => {
    authAPI.login(email, password,rememberMe, setStatus, setSubmitting)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                // console.log(response.data.messages)
                setStatus(response.data.messages)
                setSubmitting(false)
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}

export default authReducer;