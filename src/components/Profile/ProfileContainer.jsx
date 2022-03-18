import React from "react";
import styles from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../redux/profile-page-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import WithRouter from "../../hoc/WithRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        this.props.getUsersProfile(userId)
    }

    render() {
        // if (!this.props.isAuth) return <Navigate to={'/login/'} />
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getUsersProfile}),
    WithRouter,
    withAuthRedirect
)(ProfileContainer);