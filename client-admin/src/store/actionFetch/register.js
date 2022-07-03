import { BASE_URL } from "./actionType";

export default function RegisterStaff(payload) {
    return (dispatch, getState) => {
        return fetch(BASE_URL + `movie/register`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.getItem('access_token')
            },
            body: JSON.stringify(payload)
        })
    }
}