import fenleiReducer from './fenleiReducer'
import liebiaoReducer from './liebiaoReducer'
import { combineReducers } from 'redux'
const reducer = combineReducers({
    fenleiReducer,
    liebiaoReducer
})

export default reducer