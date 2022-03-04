import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-page-reducer";
// const pathname = window.location.pathname;
// console.log(pathname.slice(-1))
const Dialogs = (props) => {
// debugger;
    let dialogsElements = props.messagesPage.dialogsPageReducer.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    let messagesElements = props.messagesPage.dialogsPageReducer.messagesData
        .map(message => <Message className={styles.message} message={message.message}/>);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.messagesPage.dialogsPageReducer.newMessageText} />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;