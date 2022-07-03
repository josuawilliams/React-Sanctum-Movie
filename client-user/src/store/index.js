import {combineReducers, legacy_createStore as createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import LandingReducers from "./reducers/LandingPage"
import DetailReducers from "./reducers/Detail"
const rootReducer = combineReducers({
    Movie : LandingReducers,
    Detail : DetailReducers
    
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store