import {FETCH_DETAIL} from "../actionfetch/actionType"

const initialState = {
    detail: {},
}

function DetailReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_DETAIL:
        return { detail: action.payload }
      default:
        return state
    }
  }

export default DetailReducer