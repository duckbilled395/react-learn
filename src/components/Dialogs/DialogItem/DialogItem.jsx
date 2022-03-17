import React from "react";
import { NavLink } from "react-router-dom";
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={styles.dialog}>
        <div className={styles.avatar}><img className={styles.avatarInner} src={props.avatar} alt="123" /></div>
        <NavLink to={path} className={styles.dialogInner}>{props.name}</NavLink>
    </div>
}

export default DialogItem;