import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postData
        .map( post => <Post message={post.message} likesCount={post.likesCount}/>);

    return (
        <div className={styles.postsBlock}>
            My posts
            <div>
                New post
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;