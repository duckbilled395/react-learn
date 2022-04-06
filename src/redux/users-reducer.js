import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_PORTION_NUMBER = 'SET_PORTION_NUMBER'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    portionNumber: 1
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,
                    action.userId,
                    'id',
                    {followed: true}
                    )
                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: true}
                //     }
                //     return user;
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,
                    action.userId,
                    'id',
                    {followed: false}
                )
                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: false}
                //     }
                //     return user;
                // })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        case SET_PORTION_NUMBER: {
            return {...state, portionNumber: action.portionNumber}
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
});
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});
export const setPortionNumber = (portionNumber) => ({
    type: SET_PORTION_NUMBER,
    portionNumber
});

//THUNK CREATORS

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.followAPI(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollowAPI(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}


// const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
//     dispatch(toggleFollowingProgress(true, userId));
//     let response = await apiMethod;
//
//     if (response.data.resultCode == 0) {
//         dispatch(actionCreator(userId));
//     }
//     dispatch(toggleFollowingProgress(false, userId));
// }
//
// export const follow = (userId) => {
//     return (dispatch) => {
//         followUnfollowFlow(dispatch, userId, usersAPI.followAPI(userId).bind(usersAPI), followSuccess)
//     }
// }
//
// export const unfollow = (userId) => {
//     return (dispatch) => {
//         followUnfollowFlow(dispatch, userId, usersAPI.unfollowAPI(userId).bind(usersAPI), unfollowSuccess)
//     }
// }

export default usersReducer;