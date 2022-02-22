import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from'./Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src='https://archzine.fr/wp-content/uploads/2016/03/le-belle-photo-image-la-plus-belle-image-du-monde.jpg' alt='pic'></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;