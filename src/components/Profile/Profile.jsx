import React from "react";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileMatch from "../../hoc/WithRouter";

const Profile = (props) => {
    return (
        <div >
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
            {/*<ProfileMatch />*/}
        </div>
    );
}

export default Profile;