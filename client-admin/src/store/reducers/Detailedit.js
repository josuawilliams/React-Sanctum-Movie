import { FETCH_EDIT_MOVIE } from "../actionFetch/actionType";

const initialState = {
    edit : {
        Casts : [],
        Genre : {}
    }
}

export default function EditDataReducer (state = initialState, action){
    switch (action.type) {
        case FETCH_EDIT_MOVIE :
            return { edit : action.payload}
        default:
            return state
    }
}