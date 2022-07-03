import { BASE_URL, FETCH_GENRE } from "./actionType";

function saveDataGenre(payload) {
    return {
        type: FETCH_GENRE,
        payload
    }
}

export default function Genre() {
    return (dispatch, getState) => {
        fetch(BASE_URL + `movie/genre`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.getItem("access_token")
            }     
        })
        .then((res) => res.json())
        .then((data) => {
            dispatch(saveDataGenre(data))
        })
    }
}