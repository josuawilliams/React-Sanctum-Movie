import { BASE_URL } from "./actionType"

export default function login(payload) {
    return (dispatch) => {
        return fetch(BASE_URL + `movie/login`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
    }
}