import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={styles.dialog + ' ' + styles.active}>
        <NavLink exact={false} to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

const Messages = (props) => {
    
    let messagesData = [
        {id: 2, message: 'Hi'},
        {id: 1, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ];

    return (
        <div className={styles.messages}>
            <Message message={messagesData[0].message} />
            <Message message="How are you?" />
            <Message message="Yo" />
        </div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Vanya'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Vika'},
        {id: 6, name: 'Roma'}
    ];

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <Messages />
        </div>
    )
}

export default Dialogs;