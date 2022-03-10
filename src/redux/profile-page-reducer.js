const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 2, message: 'Hi, how are you?', likesCount: 12},
        {id: 1, message: 'It\'s my first post', likesCount: 125},
        {id: 3, message: 'Yo', likesCount: 11},
        {id: 4, message: 'Yo', likesCount: 16},
        {id: 5, message: 'Yo', likesCount: 12},
        {id: 6, message: 'Yo', likesCount: 1}
    ],
    newPostText: 'it-kamasutra'
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profilePageReducer;