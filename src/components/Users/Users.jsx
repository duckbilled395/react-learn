import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {
// debugger;

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users?client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8")
                .then(response => {
                    props.setUsers(response.data.items);
                })
    }


        // props.setUsers([
        //     {
        //         id: 1,
        //         fullName: 'Dmitry',
        //         status: 'I am a boss',
        //         location: {city: 'Minsk', country: 'Belarus'},
        //         followed: false,
        //         photoUrl: 'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'
        //     },
        //     {
        //         id: 2,
        //         fullName: 'Sasha',
        //         status: 'I am a boss too',
        //         location: {city: 'Moscow', country: 'Russia'},
        //         followed: false,
        //         photoUrl: 'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'
        //     },
        //     {
        //         id: 3,
        //         fullName: 'Andrey',
        //         status: 'I am a boss too',
        //         location: {city: 'Kiev', country: 'Ukraine'},
        //         followed: true,
        //         photoUrl: 'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'
        //     }
        // ])
    }
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="users photo"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>
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

export default Users;