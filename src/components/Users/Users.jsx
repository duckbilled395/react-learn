import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        debugger;
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}&client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
// console.log(pagesCount)
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            if (pages.length < 10) {
                pages.push(i);
            }
        }

        return (
            <div>
                <div>
                {pages.map(page => {
                    return <span
                        className={this.props.currentPage === page
                            && styles.selectedPage}
                        onClick={(e) => {this.onPageChanged(page)}} >{page}</span>
                })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="users photo"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;