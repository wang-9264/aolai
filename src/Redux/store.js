import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './Reducers'
import reduxPromise from 'redux-promise'

const Store = createStore(reducer,applyMiddleware(reduxPromise))

export default Store