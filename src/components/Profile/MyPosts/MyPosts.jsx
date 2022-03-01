import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postData
        .map( post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();


    let addPost = () => {
        
        props.addPost();
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
        props.updateNewPostText(text);
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