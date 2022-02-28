import React from "react";
import styles from './Message.module.css';

const Message = (props) => {
    return <div className={props.abv}>{props.message}</div>
}

export default Message;