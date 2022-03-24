import React from "react";
import styles from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfile, updateStatus} from "../../redux/profile-page-reducer";
import WithRouter from "../../hoc/WithRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        this.props.getUsersProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        );
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {
        getUsersProfile,
        getStatus,
        updateStatus
    }),
    WithRouter,
    // withAuthRedirect
)(ProfileContainer);