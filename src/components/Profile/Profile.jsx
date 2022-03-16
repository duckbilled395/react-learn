import React from "react";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileMatch from "./WithRouter";

const Profile = (props) => {
    return (
        <div >
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
            <ProfileMatch />
        </div>
    );
}

export default Profile;