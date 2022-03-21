import React from "react";
import styles from'./ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://archzine.fr/wp-content/uploads/2016/03/le-belle-photo-image-la-plus-belle-image-du-monde.jpg' alt='pic'></img>*/}
            {/*</div>*/}
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large} alt="asd"/>
                <ProfileStatus status={'Hello my friends'}/>
                {/*<div>{props.profile.aboutMe}</div>*/}
            </div>
        </div>
        
    );
}

export default ProfileInfo;