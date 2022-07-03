import { BASE_URL, FETCH_DETAIL } from "./actionType";
function  saveData(payload) {
    return {
        type : FETCH_DETAIL,
        payload
    }
}

export default function Detail(slug){
    return (dispatch)=>{
        return fetch(BASE_URL+ `public/detail?slug=${slug}`, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            dispatch(saveData(data))
        })
    }
}