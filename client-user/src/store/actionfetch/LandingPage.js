import { BASE_URL } from "./actionType";
import { FETCH_DATAMOVIES } from "./actionType";
function  saveData(payload) {
    return {
        type : FETCH_DATAMOVIES,
        payload
    }
}

export default function LandingPage(){
    return (dispatch)=>{
        return fetch(BASE_URL+ "public", {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(saveData(data))
        })
    }
}