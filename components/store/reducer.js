import {combineReducers} from 'redux'
import {pugs, owners} from './modules'

const reducer = combineReducers({
  pugs,
  owners
})

export default reducer
