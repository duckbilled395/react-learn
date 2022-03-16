import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd763110b-a2fc-404a-b74c-6a9bb1d741e8'
    }

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}?client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`)
            .then(response => {
                return response.data;
            });
    },
    getProfiles(userId) {
        return instance.get(`profile/${userId}/?client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`)
    },
    followAPI(userId) {
        return instance.post(`follow/${userId}?client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`)
    },
    unfollowAPI(userId) {
        return instance.delete(`follow/${userId}?client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`)
    }
}
