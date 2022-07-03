import { BASE_URL } from "./actionType"
import {FETCH_DATAMOVIES} from "../actionFetch/actionType"
import swal from 'sweetalert';

function dashboard(payload) {
    return {
        type : FETCH_DATAMOVIES,
        payload
    }
}

export default function Deleted(id){
    return (dispatch, getState) => {
        return fetch(BASE_URL + `movie/delete/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.getItem('access_token')
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.message !== 'Not Allowed For You'){
                const Data = getState().Movie.movies
                const filtered = Data.filter(el => el.id !== id)
                dispatch(dashboard(filtered))
                swal("Okee", `${data.message}`, "success");
            }else{
                swal("Opss", `${data.message}`, "error");
            }
        })
        .catch(err => {
            if(err){
            swal("Oh Noo", "Something Wrong", "error");
            }
        })
    }
        
}