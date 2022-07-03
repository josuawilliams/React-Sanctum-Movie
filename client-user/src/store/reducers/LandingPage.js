import {FETCH_DATAMOVIES} from "../actionfetch/actionType"

const initialState = {
    movies: []
}

function LandingReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_DATAMOVIES:
        return { movies: action.payload }
      default:
        return state
    }
  }

export default LandingReducer