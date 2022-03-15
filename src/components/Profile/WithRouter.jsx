import React from "react";
import {useMatch} from "react-router-dom";

const WithRouter = (Component) =>{
    let RouterComponent = (props) => {
        // debugger;
        let match = useMatch('/profile/:userId?');
        return <Component {...props} match={match}/>;
    }
    return RouterComponent;
}
export default WithRouter;