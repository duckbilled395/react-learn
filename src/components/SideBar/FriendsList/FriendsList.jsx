import React from "react";
import Friend from "./Friend/Friend";
import styles from './FriendsList.module.css';

const FriendsList = (props) => {

    let friendElements = props.state.dialogsData
        .map(friend => <Friend name={friend.name} avatar={friend.avatar}/>)

    return (
        <div className={styles.friendsList}>
            {friendElements}
        </div>
    )
}

export default FriendsList;