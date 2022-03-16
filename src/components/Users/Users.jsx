import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {keyboard} from "@testing-library/user-event/dist/keyboard";
import {usersAPI} from "../../api/api";
import {toggleFollowingProgress} from "../../redux/users-reducer";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (<div>
        <div>
            {pages.map(page => {
                return <span
                    className={props.currentPage === page
                        ? styles.selectedPage
                        : styles.page}
                    onClick={(e) => {
                        props.onPageChanged(page)
                    }}
                    key={page}
                >{page}</span>
            })}
        </div>
        {props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null
                                    ? user.photos.small
                                    : userPhoto}
                                     className={styles.userPhoto}
                                 alt="users avatar"/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                    props.toggleFollowingProgress(true, user.id);
                                    usersAPI.unfollowAPI(user.id)
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id)
                                        });

                            }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                    props.toggleFollowingProgress(true, user.id)
                                    usersAPI.followAPI(user.id)
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id)
                                        });

                            }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
        </div>)}
    </div>)
}

export default Users;