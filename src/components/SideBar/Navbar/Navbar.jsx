import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile' className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}>Profile</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to='/dialogs' className={(navData) => navData.isActive ? `${styles.activeLink}` : ''}>Messages</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to='/users' className={(navData) => navData.isActive ? `${styles.activeLink}` : ''}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news' className={(navData) => navData.isActive ? `${styles.activeLink}` : ''}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/music' className={(navData) => navData.isActive ? `${styles.activeLink}` : ''}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings' className={(navData) => navData.isActive ? `${styles.activeLink}` : ''}>Settings</NavLink>
            </div>
        </nav>
       
    );
}

export default Navbar;