import { FETCH_DETAIL } from "./actionType";
import { BASE_URL } from "./actionType";

export function detailMovie(payload) {
    return {
        type: FETCH_DETAIL,
        payload
    }
}

export function fetchDetail(data) {
    return (dispatch) => {
        return fetch(`${BASE_URL}movie/detail?slug=${data}`, {
            method: 'GET',
            headers: {
                access_token: localStorage.getItem('access_token'),
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Error Get Detail")
                }
                return res.json()
            })
            .then((data) => {
                dispatch(detailMovie(data))
            })
    }
}