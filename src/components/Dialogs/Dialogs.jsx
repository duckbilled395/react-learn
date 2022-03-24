import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import {Formik, Form, Field} from "formik";
import {Navigate} from "react-router-dom";
import {TextField} from "../Login/TextField";

const Dialogs = (props) => {


    let state = props.dialogsPage;

    let dialogsElements = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} avatar={dialog.avatar}/>);

    let messagesElements = props.dialogsPage.messagesData
        .map(message => <Message className={styles.message} message={message.message} key={message.id}/>);

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        // debugger
        let text = e.currentTarget.value;
        props.updateNewMessageText(text)
        // e.currentTarget.focus()
    }

    const AddMessageForm = (props) => {
        return (
            <Form className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                    <Field onChange={(e)=> {
                        onMessageChange(e)

                    }} name='message' value={props.newMessageText}/>
                    <button type='submit'>Send</button>
                </div>
            </Form>
        )
    }
    // if (!props.isAuth) return <Navigate to={'/login/'} />;

    return (
        <Formik
            initialValues={{
                value: props.newMessageText
            }}
            // onChange={(e) => {
            //     onMessageChange(e)
            // }}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => (
                <AddMessageForm newMessageText={props.dialogsPage.newMessageText}/>
            )}
        </Formik>

        // <div className={styles.dialogs}>
        //     <div className={styles.dialogsItems}>
        //         {dialogsElements}
        //     </div>
        //     <div className={styles.messages}>
        //         {messagesElements}
        //         <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText} />
        //         <button onClick={onSendMessageClick}>Send</button>
        //     </div>
        // </div>
    )
}


export default Dialogs;