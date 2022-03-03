import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/state";
import styles from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

    let postsElements = props.postData
        .map( post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        
        props.dispatch(addPostActionCreator());
        // ++++++++++++++++++++++++++++++++++++++++++
        // CALLING THIS FUNC FROM STATE.JS 
        // ++++++++++++++++++++++++++++++++++++++++++
        // let addPost = (postMessage) => {
        //     let newPost = {
        //       id: 5,
        //       message: postMessage,
        //       likesCount: 0
        //     };
          
        //     state.profilePage.postsData.push(newPost);
        //     rerenderEntireTree(state);
        //   }
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text)
        props.dispatch(action);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;