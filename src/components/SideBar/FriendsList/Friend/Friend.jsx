import React from "react";
import styles from './Friend.module.css';

const Friend = (props) => {
    console.log(props.avatar)
    return (
        <div className={styles.friend}>
            <div className={styles.avatar}><img className={styles.avatarInner} src={props.avatar} alt="123" /></div>
            <div className={styles.name}>
                {props.name}  
            </div>
        </div>
    )
}

export default Friend;