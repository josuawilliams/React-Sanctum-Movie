import { FETCH_DATAMOVIES } from "./actionType"
import { BASE_URL } from "./actionType"

export function dataMovies(payload) {
    return {
        type: FETCH_DATAMOVIES,
        payload
    }
}

export function fetchMovies() {
    return (dispatch) => {
        return fetch(BASE_URL+"movie", {
            method: "GET",
            headers: {
                access_token: localStorage.getItem("access_token")
            }
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("error fetch")
                }
                return res.json()
            })
            .then((data) => {
                dispatch(dataMovies(data))
            })

    }
}