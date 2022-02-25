import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    
    let postData = [
        {id: 2, message: 'Hi, how are you?', likesCount: 12},
        {id: 1, message: 'It\'s my first post', likesCount: 125},
        {id: 3, message: 'Yo', likesCount: 11},
        {id: 4, message: 'Yo', likesCount: 16},
        {id: 5, message: 'Yo', likesCount: 12},
        {id: 6, message: 'Yo', likesCount: 1}
    ];

    return (
        <div className={styles.postsBlock}>
            My posts
            <div>
                New post
            </div>
            <div className={styles.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;