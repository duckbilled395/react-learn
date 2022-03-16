import React from "react";
import styles from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-page-reducer";
import WithRouter from './WithRouter'
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        // debugger
        let userId = this.props.match.params.userId;

        usersAPI.getProfiles(userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = WithRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile
}) (withUrlDataContainerComponent);