import React from "react";
import styles from'./Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    // debugger
    return (
        <header className={styles.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' alt='pic' />

            <div className={styles.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;