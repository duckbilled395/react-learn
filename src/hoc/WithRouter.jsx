import React from "react";
import {useMatch, Navigate} from "react-router-dom";


const WithRouter = (Component) =>{
    let RouterComponent = (props) => {
        // debugger
        let match = useMatch('/profile/:userId/');
        if (!match) {
            match = {
                params: {
                    userId: 22787
                }
            }
        }
        return <Component {...props} match={match}/>;
    }
    return RouterComponent;
}
export default WithRouter;