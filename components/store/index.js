import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'
import reducer from './reducer'

const store = createStore(
  reducer,
  applyMiddleware(
    thunks.withExtraArgument({axios}),
    logger
  )
)

export default store
