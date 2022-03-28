import React from "react";
import FriendsList from "./FriendsList";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friendList: state.sideBar.friendList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendsListContainer;