import React from "react";
import {useMatch} from "react-router-dom";

const WithRouter = (Component) =>{
    let RouterComponent = (props) => {
        const match = useMatch('/profile/:userId/');
        // console.log(match)
        return <Component {...props} match={match}/>;
    }
    return RouterComponent;
}
export default WithRouter;