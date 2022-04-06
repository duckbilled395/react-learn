import React from "react";
import styles from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, setCurrentPage, setPortionNumber, ...props}) => {
// debugger
    return (<div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   portionNumberFromState={props.portionNumber}
                   setCurrentPage={setCurrentPage}
                   setPortionNumber={setPortionNumber}
        />
        <div>
            {users.map(user => <User user={user}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                                     key={user.id}/>)}
        </div>
    </div>)
}

export default Users;