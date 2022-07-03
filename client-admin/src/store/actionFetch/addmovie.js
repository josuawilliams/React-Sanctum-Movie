import { BASE_URL } from "./actionType";


export default function addMovies(payload) {
    return (dispatch) => {
        return fetch(BASE_URL + `movie`, {
            method: 'post',
            headers: {
                access_token: localStorage.getItem('access_token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
    }
}

