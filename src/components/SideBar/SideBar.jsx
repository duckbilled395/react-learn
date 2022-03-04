import React from "react";
import styles from './SideBar.module.css';
import Navbar from './Navbar/Navbar'
import FriendsList from "./FriendsList/FriendsList";

const SideBar = (props) => {
    // debugger;
    return (
        <div className={styles.sideBar}>
            <Navbar />
            <FriendsList state={props.state}/>
        </div>
    );
}

export default SideBar;