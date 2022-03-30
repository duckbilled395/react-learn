import React from "react";
import {useMatch} from "react-router-dom";


const WithRouter = (Component) =>{
    let RouterComponent = (props) => {

        let match = useMatch('/profile/:userId/');
        if (!match) {
            match = {
                params: {
                    userId: props.authorizedUserId
                }
            }
        }
        return <Component {...props} match={match}/>;
    }
    return RouterComponent;
}
export default WithRouter;