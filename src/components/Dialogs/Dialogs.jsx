import React from "react";
import { Route } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
// const pathname = window.location.pathname;
// console.log(pathname.slice(-1))
const Dialogs = (props) => {
    

    let dialogsElements = props.state.dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    let messagesElements = props.state.messagesData
        .map( message => <Message className={styles.message} message={message.message} />);
        
    // let messagesElements = props.state.messagesData
    //     .map( (message) => {
    //             // for (let i = 0; i <= props.state.messagesData.length; i++) {
    //                 console.log(`/dialogs/${message.id}`)
    //                 if (`/dialogs/${message.id}` === pathname) {
    //                     return <Message abv={styles.right} message={message.message} />;
    //                 } else { return <Message abv={styles.left} message={message.message} />; }
                    // if (props.state.dialogsData[i].id === message.id) {
                    //     return <Message abv={styles.right} message={message.message} />;
                    // } else { return <Message abv={styles.left} message={message.message} />; }
                // }
            // })

    let newMessage = React.createRef();

    let sendMessage = () => {
        alert(newMessage.current.value)
        
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <textarea ref={newMessage} cols="30" rows="10"></textarea>
                <button onClick={sendMessage}>Send</button>

            </div>
        </div>
    )
}

export default Dialogs;