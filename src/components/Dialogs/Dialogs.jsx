import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Dialogs.module.css';

const DialogItem = (props) => {
    return <div className={styles.dialog + ' ' + styles.active}>
    <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
</div>
}

export const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name="Victor" id="1"/>
                <DialogItem name="Sveta" id="2"/>
                <DialogItem name="Vanya" id="3"/>
                <DialogItem name="Andrey" id="4"/>
                <DialogItem name="Vika" id="5"/>
                <DialogItem name="Roma" id="6"/>
            </div>
            <div className={styles.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs;