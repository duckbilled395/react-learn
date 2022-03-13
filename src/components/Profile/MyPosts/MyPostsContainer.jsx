import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-page-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
// // debugger;
//     let state = props.store.getState();
//
//     let onAddPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text) => {
//         let action = updateNewPostActionCreator(text)
//         props.store.dispatch(action);
//     }
//
//     return (
//         <MyPosts updateNewPostText={onPostChange}
//                  addPost={onAddPost}
//                  posts={state.profilePage.postsData}
//                  newPostText={state.profilePage.newPostText} />
//     );
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;