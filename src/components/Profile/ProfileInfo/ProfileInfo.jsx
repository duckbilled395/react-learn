import React from "react";
import styles from'./ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://archzine.fr/wp-content/uploads/2016/03/le-belle-photo-image-la-plus-belle-image-du-monde.jpg' alt='pic'></img>
            </div>
            <div className={styles.descriptionBlock}>
                ava + description
            </div>
        </div>
        
    );
}

export default ProfileInfo;