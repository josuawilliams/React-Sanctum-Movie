import { FETCH_DETAIL } from "../actionFetch/actionType"
const initialState = {
    detail: []
}

export function DetailReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DETAIL:
            return { detail: action.payload }
        default:
            return state
    }
}
