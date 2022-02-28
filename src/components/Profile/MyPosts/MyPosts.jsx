import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postData
        .map( post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();


    let addPost = () => {
        props.addPost(newPostElement.current.value)
    }
    
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} cols="30" rows="10"></textarea>
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