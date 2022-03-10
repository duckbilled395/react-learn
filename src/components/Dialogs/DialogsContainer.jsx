import React from "react";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-page-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
// // debugger;
//     let state = props.store.getState().dialogsPage;
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageActionCreator());
//     }
//
//     let onMessageChange = (text) => {
//         props.store.dispatch(updateNewMessageActionCreator(text));
//     }
//
//     return (
//         <Dialogs updateNewMessageText={onMessageChange}
//                  sendMessage={onSendMessageClick}
//                  dialogsPage={props.store.getState().dialogsPage}
//         />
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;