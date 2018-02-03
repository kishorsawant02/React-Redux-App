import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import reducer from './reducers'

const middleWare = applyMiddleware(promise(), logger)

const store = createStore(reducer, middleWare)

export default store
