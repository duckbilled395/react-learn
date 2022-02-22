import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={styles.posts}>
                <Post message="Hi, how are you?" likesCount="15"/>
                <Post message="It's my first post" likesCount="20"/>
            </div>
        </div>
    );
}

export default MyPosts;