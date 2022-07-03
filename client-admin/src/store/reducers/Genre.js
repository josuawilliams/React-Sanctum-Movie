import { FETCH_GENRE } from "../actionFetch/actionType";
const initialState = {
    Genre: []
}

export default function GenreReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_GENRE : 
            return { Genre : action.payload}
        default: 
            return state
    }
}
