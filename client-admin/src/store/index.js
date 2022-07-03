import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux'
import { DashboardReducer } from './reducers/Dashboard'
import { DetailReducer } from './reducers/Detail'
import  GenreReducer  from './reducers/Genre'
import EditDataReducer from './reducers/Detailedit'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    Movie: DashboardReducer,
    Detail: DetailReducer,
    Edit: EditDataReducer,
    DataGenre: GenreReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
