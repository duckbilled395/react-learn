import React from "react";
import styles from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-page-reducer";
import WithRouter from './WithRouter'
class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2?client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`)
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

// const ProfileMatch = (props) => {
//     const params = useParams();
//
//     console.log(params)
//     return <ProfileContainer />
// }

export default connect(mapStateToProps, {
    setUserProfile
}) (withUrlDataContainerComponent);