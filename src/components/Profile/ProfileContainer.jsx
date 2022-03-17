import React from "react";
import styles from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../redux/profile-page-reducer";
import WithRouter from './WithRouter';
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        this.props.getUsersProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login/'} />
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let withUrlDataContainerComponent = WithRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getUsersProfile
})(withUrlDataContainerComponent);