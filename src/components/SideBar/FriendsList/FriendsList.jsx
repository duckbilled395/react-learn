import React from "react";
import Friend from "./Friend/Friend";
import styles from './FriendsList.module.css';

const FriendsList = (props) => {
// debugger;
    let friendElements = props.friendList
        .map(friend => <Friend name={friend.name}
                               avatar={friend.avatar}
                               key={friend.id}/>)

    return (
        <div className={styles.friendsList}>
            {friendElements}
        </div>
    )
}

export default FriendsList;