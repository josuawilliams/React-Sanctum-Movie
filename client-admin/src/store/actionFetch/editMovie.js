import { FETCH_EDIT_MOVIE } from "./actionType";
import { BASE_URL } from "./actionType";

function edit(payload) {
    return {
        type : FETCH_EDIT_MOVIE,
        payload
    }
}

export function editData(id) {
    return (dispatch) => {
        return fetch(BASE_URL + `movie/${id}`, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                access_token : localStorage.getItem("access_token")
            }
        })
        .then(res => res.json())
        .then((data)=>{
            dispatch(edit(data))
        })
        .catch(err => console.log(err))
    }
}

export function EditMovie(id, data) {
    return (dispatch) => {
        return fetch(BASE_URL + `movie/update/${id}`, {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
                access_token : localStorage.getItem("access_token")
            },
            body : JSON.stringify(data)
        })
    }
}