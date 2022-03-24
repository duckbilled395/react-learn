import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import {Formik, Form} from "formik";
import {DialogsTextField} from "./DialogsTextField";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} avatar={dialog.avatar}/>);

    let messagesElements = state.messagesData
        .map(message => <Message className={styles.message} message={message.message} key={message.id}/>);

    let onSendMessageClick = (newMessage) => {
        props.sendMessage(newMessage);
    }

    return (
        <Formik initialValues={{
            message: ''
        }}
                onSubmit={(values, {resetForm}) => {
                    console.log('values: ', values.message)
                    onSendMessageClick(values)
                    resetForm();
                }}
        >
            {(formik) => (
                <Form>
                    <div className={styles.dialogs}>
                        <div className={styles.dialogsItems}>
                            {dialogsElements}
                        </div>
                        <div className={styles.messages}>
                            {messagesElements}
                            <DialogsTextField name='message' type='text' />
                            <button type='submit'>Send</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Dialogs;