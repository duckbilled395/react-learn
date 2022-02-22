import React from "react";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <a href='#1'>Profile</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a href='#1'>Messages</a>
            </div>
            <div className={styles.item}>
                <a href='#1'>News</a>
            </div>
            <div className={styles.item}>
                <a href='#1'>Music</a>
            </div>
            <div className={styles.item}>
                <a href='#1'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;