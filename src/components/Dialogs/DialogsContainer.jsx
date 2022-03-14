import React from "react";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-page-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

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