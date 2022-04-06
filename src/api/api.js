import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9905fcc7-4cfc-4226-9011-3b0bfc1413f6'
    }

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}?client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId);
    },
    followAPI(userId) {
        return instance.post(`follow/${userId}?client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`)
    },
    unfollowAPI(userId) {
        return instance.delete(`follow/${userId}?client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`)
    },

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}/?client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`)
    },
    getStatus(userId) {
        console.log(userId)
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me?client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`)
    },
    login(email, password,rememberMe = false) {
        return instance.post(`auth/login?client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`, {email, password,rememberMe})
    },
    logout(email, password,rememberMe = false) {
        return instance.delete(`auth/login?client_id=d763110b-a2fc-404a-b74c-6a9bb1d741e8`)
    }

}