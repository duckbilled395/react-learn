import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
const pathname = window.location.pathname;
const Dialogs = (props) => {
    

    let dialogsElements = props.state.dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    // let messagesElements = props.state.messagesData
    //     .map( message => <Message message={message.message} />)

    let messagesElements = props.state.messagesData
        .map( (message) => {
                // for (let i = 0; i <= props.state.messagesData.length; i++) {
                    console.log(`/dialogs/${message.id}`)
                    if (`/dialogs/${message.id}` === pathname) {
                        return <Message abv={styles.right} message={message.message} />;
                    } else { return <Message abv={styles.left} message={message.message} />; }
                    // if (props.state.dialogsData[i].id === message.id) {
                    //     return <Message abv={styles.right} message={message.message} />;
                    // } else { return <Message abv={styles.left} message={message.message} />; }
                // }
            })

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;