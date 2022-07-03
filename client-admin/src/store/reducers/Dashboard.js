import { FETCH_DATAMOVIES } from "../actionFetch/actionType"
const initialState = { 
    movies: [],
}

export function DashboardReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATAMOVIES :
            return { movies : action.payload}
        default:
            return state
    }
}
