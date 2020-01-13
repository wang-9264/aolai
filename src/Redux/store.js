import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './Reducers'
import reduxPromise from 'redux-promise'

// const Store = createStore(reducer,applyMiddleware(reduxPromise))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxPromise)))

export default Store