import React from "react";
import {useMatch} from "react-router-dom";

const WithRouter = (Component) =>{
    let RouterComponent = (props) => {
        let match = useMatch('/profile/:userId/');
        // console.log(match)
        if (!match) {
            match = {
                params: {
                    userId: 22708
                }
            }
        }
        return <Component {...props} match={match}/>;
    }
    return RouterComponent;
}
export default WithRouter;