import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' alt='pic'></img>
            <div className={styles.loginBlock}>
                <NavLink to={'/login/*'}>Login</NavLink>
            </div>
        </header>
    );
}

export default Header;