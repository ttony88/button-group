import { combineReducers, createStore } from 'redux'
import buttonsReducer from './buttonsReducer'

const reducers = combineReducers({
    buttons: buttonsReducer,
})

let store = createStore(reducers)

export default store