import React from "react";
import styles from'./Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' alt='pic'></img>
        </header>
    );
}

export default Header;