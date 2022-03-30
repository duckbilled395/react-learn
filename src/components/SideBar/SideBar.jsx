import React from "react";
import styles from './SideBar.module.css';
import Navbar from './Navbar/Navbar'
import FriendsListContainer from "./FriendsList/FriendsListContainer";

const SideBar = (props) => {
    // debugger;
    return (
        <div className={styles.sideBar}>
            <Navbar />
            <FriendsListContainer />
        </div>
    );
}

export default SideBar;