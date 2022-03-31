import React, {Component} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirectToProfile = (Component) => {
    let RedirectComponent = (props) => {
        if (props.isAuth) return <Navigate to={'/profile/'} />
        return <Component {...props} />
    }
    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth
    });

    let ConnetctedAuthRedirectComponent = connect(mapStateToPropsForRedirect)
    (RedirectComponent);
    return ConnetctedAuthRedirectComponent;
}